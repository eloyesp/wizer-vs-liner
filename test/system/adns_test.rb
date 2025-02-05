require "application_system_test_case"

class AdnsTest < ApplicationSystemTestCase
  setup do
    @adn = adns(:one)
  end

  test "visiting the index" do
    visit adns_url
    assert_selector "h1", text: "Adns"
  end

  test "should create adn" do
    visit adns_url
    click_on "New adn"

    fill_in "Sequence", with: @adn.sequence
    click_on "Create Adn"

    assert_text "Adn was successfully created"
    click_on "Back"
  end

  test "should update Adn" do
    visit adn_url(@adn)
    click_on "Edit this adn", match: :first

    fill_in "Sequence", with: @adn.sequence
    click_on "Update Adn"

    assert_text "Adn was successfully updated"
    click_on "Back"
  end

  test "should destroy Adn" do
    visit adn_url(@adn)
    click_on "Destroy this adn", match: :first

    assert_text "Adn was successfully destroyed"
  end
end
