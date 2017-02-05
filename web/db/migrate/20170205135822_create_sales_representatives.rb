class CreateSalesRepresentatives < ActiveRecord::Migration[5.0]
  def change
    create_table :sales_representatives do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.integer :experience
      t.string :ssn
      t.string :city
      t.string :country
      t.string :state
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
