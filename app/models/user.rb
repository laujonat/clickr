class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :fname, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  attr_reader :password

  # has_many: Photos
  # has_many: Albums
  # has_many: Comments
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def self.find_by_crendentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil 
  end


end
