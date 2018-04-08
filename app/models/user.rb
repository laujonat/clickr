class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :fname, presence: true
  validates :email, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  attr_reader :password

  has_attached_file :cover_photo,  default_url: "default_cover.png"
  has_attached_file :avatar,  default_url: "default_avatar.png"
  validates_attachment_content_type :avatar, :cover_photo, content_type: /\Aimage\/.*\z/

  has_many :photos

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

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

end
