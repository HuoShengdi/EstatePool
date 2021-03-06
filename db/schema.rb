# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160828015750) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "accounts", ["email"], name: "index_accounts_on_email", unique: true, using: :btree

  create_table "investments", force: :cascade do |t|
    t.integer  "offering_id", null: false
    t.integer  "account_id",  null: false
    t.integer  "amount",      null: false
    t.string   "status"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "investments", ["account_id"], name: "index_investments_on_account_id", using: :btree
  add_index "investments", ["offering_id"], name: "index_investments_on_offering_id", using: :btree

  create_table "offerings", force: :cascade do |t|
    t.string   "name",            null: false
    t.integer  "account_id",      null: false
    t.string   "investment_type", null: false
    t.string   "property_type",   null: false
    t.integer  "min_investment"
    t.decimal  "target_return"
    t.integer  "hold"
    t.string   "image_url"
    t.text     "description"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "offerings", ["account_id"], name: "index_offerings_on_account_id", using: :btree
  add_index "offerings", ["name"], name: "index_offerings_on_name", unique: true, using: :btree

end
