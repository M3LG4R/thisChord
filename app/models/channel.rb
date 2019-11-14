class Channel < ApplicationRecord
    validates :name, presence: true

    belongs_to :server

    has_many :messages
end
