class AddIndexToserverMemberships < ActiveRecord::Migration[5.2]
  def change
    add_index(:server_memberships, [:member_id, :server_id], unique:true)
  end
end
