class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.integer :offering_id, null: false
      t.integer :account_id, null: false
      t.integer :amount, null: false
      t.string :status
      t.timestamps null: false
    end

    add_index :investments, :account_id
    add_index :investments, :offering_id
  end
end
