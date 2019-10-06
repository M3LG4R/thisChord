class RenameColumnInServerMemberships < ActiveRecord::Migration[5.2]
  def change
    rename_column(:server_memberships, :member_id, :user_id)
  end
end
