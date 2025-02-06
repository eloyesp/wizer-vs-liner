require "test_helper"

class AdnsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @adn = adns(:human)
  end

  test "should get index" do
    get adns_url
    assert_response :success
  end

  test "can explore new sequences without storing" do
    assert_difference("Adn.count", 0) do
      post explore_new_adn_url, as: :json,
        params: { adn: { sequence: "ggaaaat" } }
    end
    assert_response :success
    assert_equal response.parsed_body[:sequence], "ggAAAAt"
  end

  test "should get new" do
    get new_adn_url
    assert_response :success
  end

  test "should create adn" do
    assert_difference("Adn.count") do
      post adns_url, params: { adn: { sequence: @adn.sequence } }
    end

    assert_redirected_to adn_url(Adn.last)
  end

  test "should show adn" do
    get adn_url(@adn)
    assert_response :success
  end

  test "should get edit" do
    get edit_adn_url(@adn)
    assert_response :success
  end

  test "should update adn" do
    patch adn_url(@adn), params: { adn: { sequence: @adn.sequence } }
    assert_redirected_to adn_url(@adn)
  end

  test "should destroy adn" do
    assert_difference("Adn.count", -1) do
      delete adn_url(@adn)
    end

    assert_redirected_to adns_url
  end
end
