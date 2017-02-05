class SalesRepresentativesController < ApplicationController
  before_action :set_sales_representative, only: [:show, :edit, :update, :destroy]

  # GET /sales_representatives
  # GET /sales_representatives.json
  def index
    @sales_representatives = SalesRepresentative.all
  end

  # GET /sales_representatives/1
  # GET /sales_representatives/1.json
  def show
  end

  # GET /sales_representatives/new
  def new
    @sales_representative = SalesRepresentative.new
  end

  # GET /sales_representatives/1/edit
  def edit
  end

  # POST /sales_representatives
  # POST /sales_representatives.json
  def create
    @sales_representative = SalesRepresentative.new(sales_representative_params)

    respond_to do |format|
      if @sales_representative.save
        format.html { redirect_to @sales_representative, notice: 'Sales representative was successfully created.' }
        format.json { render :show, status: :created, location: @sales_representative }
      else
        format.html { render :new }
        format.json { render json: @sales_representative.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sales_representatives/1
  # PATCH/PUT /sales_representatives/1.json
  def update
    respond_to do |format|
      if @sales_representative.update(sales_representative_params)
        format.html { redirect_to @sales_representative, notice: 'Sales representative was successfully updated.' }
        format.json { render :show, status: :ok, location: @sales_representative }
      else
        format.html { render :edit }
        format.json { render json: @sales_representative.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sales_representatives/1
  # DELETE /sales_representatives/1.json
  def destroy
    @sales_representative.destroy
    respond_to do |format|
      format.html { redirect_to sales_representatives_url, notice: 'Sales representative was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sales_representative
      @sales_representative = SalesRepresentative.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sales_representative_params
      params.require(:sales_representative).permit(:first_name, :last_name, :middle_name, :experience, :ssn, :city, :country, :state, :phone, :email)
    end
end
