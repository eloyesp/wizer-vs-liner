class AdnsController < ApplicationController
  before_action :set_adn, only: %i[ show edit update destroy ]

  # GET /adns or /adns.json
  def index
    @adns = Adn.all
  end

  # GET /adns/1 or /adns/1.json
  def show
  end

  # GET /adns/new
  def new
    @adn = Adn.new
  end

  # GET /adns/1/edit
  def edit
  end

  # POST /adns or /adns.json
  def create
    @adn = Adn.new(adn_params)

    respond_to do |format|
      if @adn.save
        format.html { redirect_to @adn, notice: "Adn was successfully created." }
        format.json { render :show, status: :created, location: @adn }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @adn.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /adns/1 or /adns/1.json
  def update
    respond_to do |format|
      if @adn.update(adn_params)
        format.html { redirect_to @adn, notice: "Adn was successfully updated." }
        format.json { render :show, status: :ok, location: @adn }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @adn.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /adns/1 or /adns/1.json
  def destroy
    @adn.destroy!

    respond_to do |format|
      format.html { redirect_to adns_path, status: :see_other, notice: "Adn was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_adn
      @adn = Adn.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def adn_params
      params.expect(adn: [ :sequence ])
    end
end
