require "open-uri"

4000.times do |i|

  test_url = "http://www.j-archive.com/showgame.php?game_id=#{i + 1000}"

  doc = Nokogiri::HTML(open(test_url))

  if doc.at_css("#game_title h1").present?

    game_title = doc.at_css("#game_title h1").text.gsub(/\A.*( - )/, "")
    game_date = DateTime.strptime(game_title, "%A, %B %e, %Y")

    rounds = doc.css("table.round")
    single_jeopardy = rounds[0]
    double_jeopardy = rounds[1]

    single_jeopardy_categories = single_jeopardy.css("td.category")
    categories = single_jeopardy_categories.map do |single_jeopardy_category|
      Category.find_or_create_by(name: single_jeopardy_category.at_css("td.category_name").text)
    end

    clue_group1 = ClueGroup.create(category_id: categories[0].id, round: "single", year: game_date.year)
    clue_group2 = ClueGroup.create(category_id: categories[1].id, round: "single", year: game_date.year)
    clue_group3 = ClueGroup.create(category_id: categories[2].id, round: "single", year: game_date.year)
    clue_group4 = ClueGroup.create(category_id: categories[3].id, round: "single", year: game_date.year)
    clue_group5 = ClueGroup.create(category_id: categories[4].id, round: "single", year: game_date.year)
    clue_group6 = ClueGroup.create(category_id: categories[5].id, round: "single", year: game_date.year)

    single_jeopardy_clues_data = single_jeopardy.css("td.clue")
    single_jeopardy_clues_data.each_with_index do |single_jeopardy_clue, index|
      question_text = single_jeopardy_clue.at_css(".clue_text").present? ? single_jeopardy_clue.at_css(".clue_text").text : nil;
      answer_text = single_jeopardy_clue.at_css("div[onmouseover]").present? ? single_jeopardy_clue.at_css("div[onmouseover]")["onmouseover"].match(/">.*<\/em>/).to_s.gsub(/^">/, "").gsub(/<\/em>|<i>|<\/i>/, "") : nil;

      point_value = nil
      case index
      when 0..5 then point_value = 200
      when 6..11 then point_value = 400
      when 12..17 then point_value = 600
      when 18..23 then point_value = 800
      when 24..29 then point_value = 1000
      end

      clue_group_id = nil
      case index % 6
      when 0 then clue_group_id = clue_group1.id
      when 1 then clue_group_id = clue_group2.id
      when 2 then clue_group_id = clue_group3.id
      when 3 then clue_group_id = clue_group4.id
      when 4 then clue_group_id = clue_group5.id
      when 5 then clue_group_id = clue_group6.id
      end

      Clue.create(point_value: point_value,
                  question: question_text,
                  answer: answer_text,
                  clue_group_id: clue_group_id)
    end


    double_jeopardy_categories = double_jeopardy.css("td.category")
    double_categories = double_jeopardy_categories.map do |double_jeopardy_category|
      Category.find_or_create_by(name: double_jeopardy_category.at_css("td.category_name").text)
    end

    double_clue_group1 = ClueGroup.create(category_id: double_categories[0].id, round: "double", year: game_date.year)
    double_clue_group2 = ClueGroup.create(category_id: double_categories[1].id, round: "double", year: game_date.year)
    double_clue_group3 = ClueGroup.create(category_id: double_categories[2].id, round: "double", year: game_date.year)
    double_clue_group4 = ClueGroup.create(category_id: double_categories[3].id, round: "double", year: game_date.year)
    double_clue_group5 = ClueGroup.create(category_id: double_categories[4].id, round: "double", year: game_date.year)
    double_clue_group6 = ClueGroup.create(category_id: double_categories[5].id, round: "double", year: game_date.year)

    double_jeopardy_clues_data = double_jeopardy.css("td.clue")
    double_jeopardy_clues_data.each_with_index do |double_jeopardy_clue, index|
      question_text = double_jeopardy_clue.at_css(".clue_text").present? ? double_jeopardy_clue.at_css(".clue_text").text : nil;
      answer_text = double_jeopardy_clue.at_css("div[onmouseover]").present? ? double_jeopardy_clue.at_css("div[onmouseover]")["onmouseover"].match(/">.*<\/em>/).to_s.gsub(/^">/, "").gsub(/<\/em>|<i>|<\/i>/, "") : nil;

      point_value = nil
      case index
      when 0..5 then point_value = 400
      when 6..11 then point_value = 800
      when 12..17 then point_value = 1200
      when 18..23 then point_value = 1600
      when 24..29 then point_value = 2000
      end

      clue_group_id = nil
      case index % 6
      when 0 then clue_group_id = double_clue_group1.id
      when 1 then clue_group_id = double_clue_group2.id
      when 2 then clue_group_id = double_clue_group3.id
      when 3 then clue_group_id = double_clue_group4.id
      when 4 then clue_group_id = double_clue_group5.id
      when 5 then clue_group_id = double_clue_group6.id
      end

      Clue.create(point_value: point_value,
                  question: question_text,
                  answer: answer_text,
                  clue_group_id: clue_group_id)
    end

    puts "Scraped Game Data for ID: #{i}"

  else

    puts "SKIPPED ID: #{i} -- DOESN'T EXIST"

  end

end
