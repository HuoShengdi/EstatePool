class CreateOfferings < ActiveRecord::Migration
  def change
    create_table :offerings do |t|
      t.string :name, null: false
      t.string :investment_type, null: false
      t.string :property_type, null: false
      t.integer :min_investment
      t.decimal :target_return
      t.integer :hold
      t.string :image_url
      t.text :description
      t.timestamps null: false
    end
  end
end
