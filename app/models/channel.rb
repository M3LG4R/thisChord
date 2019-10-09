class Channel < ApplicationRecord
    validates :name, presence: true

    belongs_to :server

    
end
