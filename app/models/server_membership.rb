class ServerMembership < ApplicationRecord
# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  member_id  :integer
#  server_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

    validates :user_id, :server_id, presence: true
    validates :server_id, uniqueness: { scope: :user_id }

    belongs_to :server
    
    belongs_to :user

end
