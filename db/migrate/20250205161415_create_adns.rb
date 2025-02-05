class CreateAdns < ActiveRecord::Migration[8.0]
  def change
    create_table :adns do |t|
      t.string :sequence

      t.timestamps
    end
  end
end
