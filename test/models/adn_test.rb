require "test_helper"

class AdnTest < ActiveSupport::TestCase
  test "ADN sequences have exactly 36 letters" do
    adn = Adn.new
    assert_not adn.valid?
    adn.sequence = "a" * 36
    assert adn.valid?
  end

  test "ADN sequences ignore letters that are not acgt" do
    adn = Adn.new sequence: "ba" * 18
    assert_not_includes adn.sequence, "b"
  end

  test "mutations are upcased on the ADN sequences" do
    sequence_with_mutations = <<~SEQ.gsub(/\s+/, "")
      AtgcGa
      cAgtGc
      ttAtGt
      agaAGg
      CCCCta
      tcactg
    SEQ
    adn = Adn.new sequence: sequence_with_mutations
    assert_equal adn.sequence, sequence_with_mutations
  end

  test "mutants can be identified" do
    adn = Adn.new sequence: adns(:human).sequence
    assert_not adn.mutant?
    adn.sequence = adns(:mutant).sequence
    assert adn.mutant?
  end
end
