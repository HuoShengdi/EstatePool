class Account < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true

  has_many :investments
  has_many :offerings

  def self.find_by_credentials(email, password)
    account = Account.find_by(email: email)
    return nil if account.nil?

    account.is_password?(password) ? account : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
