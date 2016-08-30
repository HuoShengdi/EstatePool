class CreateOfferings < ActiveRecord::Migration
  def change
    create_table :offerings do |t|
      t.string :name, null: false
      t.integer :account_id, null: false
      t.string :investment_type, null: false
      t.string :property_type, null: false
      t.integer :min_investment
      t.decimal :target_return
      t.integer :hold
      t.string :image_url
      t.text :description
      t.timestamps null: false
    end

    add_index :offerings, :name, unique: true
    add_index :offerings, :account_id
  end
end
