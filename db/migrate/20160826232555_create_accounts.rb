class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps null: false
    end

    add_index :accounts, :email, unique: true
  end
end
