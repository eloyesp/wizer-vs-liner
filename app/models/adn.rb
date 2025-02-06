class Adn < ApplicationRecord
  validates :sequence, length: { is: 36 }, presence: true

  def sequence=(dna_string)
    cleaned_string = dna_string.downcase.gsub(/[^acgt]/, "")
    super(highlight_mutations(cleaned_string))
  end

  # An ADN sequence is mutant when there are more than two mutant substrings
  def mutant?
    sequence.gsub(/[[:lower:]]/, "").size > 6
  end

  private

  # Mutations are highlighted using uppercase characters
  def highlight_mutations(string)
    string = "%-36.36s" % string
    return "" unless string.length == 36
    array_string = string.unpack("A" * 36).each_with_index.to_a

    rows = array_string.each_slice(6).to_a
    columns = rows.transpose

    diagonals = [
      array_string.values_at(12, 19, 26, 33),
      array_string.values_at(6, 13, 20, 27, 34),
      array_string.values_at(0, 7, 14, 21, 28, 35),
      array_string.values_at(1, 8, 15, 22, 29),
      array_string.values_at(2, 9, 16, 23),
      array_string.values_at(3, 8, 13, 18),
      array_string.values_at(4, 9, 14, 19, 24),
      array_string.values_at(5, 10, 15, 20, 25, 30),
      array_string.values_at(11, 16, 21, 26, 31),
      array_string.values_at(17, 22, 27, 32),
    ]

    substrings = rows.concat diagonals, columns

    substrings.each do |substring|
      substring.map(&:first).join.match(/(.)\1{3,}/) do |match|
        offset = match.offset(0)
        range = (offset[0]...offset[1])
        substring[range].each do |letter, index|
          string[index] = letter.upcase
        end
      end
    end

    string.strip
  end
end
