# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  image_url   :string
#  invite_code :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord
    validates :name, :invite_code, presence: true
    after_initialize :ensure_invite_link
    
    has_many :server_memberships

    has_many :members,
    through: :server_memberships,
    source: :user

    has_many :channels

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    
    


    def self.generate_unique_invite_link
        invite_link = SecureRandom.urlsafe_base64(4, false)
        until !(Server.find_by({invite_code: invite_link })) do
            invite_link = SecureRandom.urlsafe_base64(4, false)
        end
        invite_link
    end

    def ensure_invite_link
        self.invite_code ||= Server.generate_unique_invite_link
    end

end
