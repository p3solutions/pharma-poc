require 'test_helper'

class SalesRepresentativesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sales_representative = sales_representatives(:one)
  end

  test "should get index" do
    get sales_representatives_url
    assert_response :success
  end

  test "should get new" do
    get new_sales_representative_url
    assert_response :success
  end

  test "should create sales_representative" do
    assert_difference('SalesRepresentative.count') do
      post sales_representatives_url, params: { sales_representative: { city: @sales_representative.city, country: @sales_representative.country, email: @sales_representative.email, experience: @sales_representative.experience, first_name: @sales_representative.first_name, last_name: @sales_representative.last_name, middle_name: @sales_representative.middle_name, phone: @sales_representative.phone, ssn: @sales_representative.ssn, state: @sales_representative.state } }
    end

    assert_redirected_to sales_representative_url(SalesRepresentative.last)
  end

  test "should show sales_representative" do
    get sales_representative_url(@sales_representative)
    assert_response :success
  end

  test "should get edit" do
    get edit_sales_representative_url(@sales_representative)
    assert_response :success
  end

  test "should update sales_representative" do
    patch sales_representative_url(@sales_representative), params: { sales_representative: { city: @sales_representative.city, country: @sales_representative.country, email: @sales_representative.email, experience: @sales_representative.experience, first_name: @sales_representative.first_name, last_name: @sales_representative.last_name, middle_name: @sales_representative.middle_name, phone: @sales_representative.phone, ssn: @sales_representative.ssn, state: @sales_representative.state } }
    assert_redirected_to sales_representative_url(@sales_representative)
  end

  test "should destroy sales_representative" do
    assert_difference('SalesRepresentative.count', -1) do
      delete sales_representative_url(@sales_representative)
    end

    assert_redirected_to sales_representatives_url
  end
end
