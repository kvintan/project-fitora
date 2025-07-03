import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";


const { width } = Dimensions.get("window");

const articles = [
  {
    id: 1,
    title: "Hydration Matters: Why Water Is Your Secret Weapon",
    image: require("../assets/thumbnail_article_1.png"),
    screen: "ArticleDetail",
    content:
      "Water is often overlooked, but it\'s the unsung hero of our daily health. Everything from digestion and metabolism to focus and skin health is influenced by how much water we drink. Staying hydrated is essential, yet many of us go through our day without giving it much thought. If you\'re someone who struggles to drink enough water, don\'t worry—this article breaks down the importance of hydration, the signs of dehydration, and easy ways to make drinking water a part of your daily routine. Let\'s dive in! 💦\n\n" +
      
      "➵ How Much Water Do You Need?\n\n" +
      "A common rule of thumb is to drink eight 8-ounce glasses of water per day (the \"8x8\" rule). However, the amount of water you need can vary depending on factors like activity level, climate, and overall health. General guidelines suggest:\n\n" +
      "🚹 Men: About 3.7 liters (125 oz) per day\n" +
      "🚺 Women: About 2.7 liters (91 oz) per day\n\n" +
      "Remember, this includes water from all sources—fruits, vegetables, and even drinks like tea or coffee contribute. But plain water is still the best source of hydration. 💧\n\n" +
      
      "➵ Signs of Dehydration\n\n" +
      "Dehydration can sneak up on you. Here are some common signs:\n\n" +
      "😴 Fatigue or sluggishness\n" +
      "😖 Headaches or dizziness\n" +
      "👅 Dry mouth or skin\n" +
      "💛 Dark yellow urine\n" +
      "🍟 Craving sugar or salty foods\n\n" +
      "If you notice these symptoms, it might be time to reach for a glass of water!\n\n" +
      
      "➵ Making Hydration Fun and Easy\n\n" +
      "Drinking water doesn\'t have to be boring. Try these tips:\n\n" +
      "🍋 Add mint, lemon, or berries to your water for flavor.\n" +
      "🍉 Eat water-rich foods like cucumbers, watermelon, and oranges.\n" +
      "⏰ Set reminders on your phone to sip water regularly.\n\n" +
      "Hydration can be tasty, colorful, and fun!\n\n" +
      
      "➵ Hydration and Fat Burning\n\n" +
      "Water helps your body burn calories more efficiently. It supports metabolism and helps you feel full, especially when consumed before meals. For those trying to lose weight, staying hydrated gives your fat-burning efforts a major boost. 🔥\n\n" +
      
      "➵ Conclusion\n\n" +
      "Water is a powerful tool for better health—fueling your metabolism, aiding digestion, boosting skin health, and helping mental clarity. Drink more water daily, infuse it with fruits, eat water-rich foods, and notice how energized and focused you feel. 💧✨"
  },
  {
    id: 2,
    title: "Pre And Post Workout Nutrition: What To Eat And Why",
    image: require("../assets/thumbnail_article_2.png"),
    screen: "ArticleDetail",
    content:
      "When it comes to maximizing your workout results, what you eat before and after your session can make all the difference. Whether you're aiming to improve strength, endurance, or recovery, pre and post-workout nutrition plays a critical role. The goal is to fuel your body with the right nutrients before your workout, and help it recover afterward. Let's break down what to eat and when, so you can make the most out of your exercise routine.\n\n" +

      "➵ Pre-Workout: Fuel for Energy \n\n" +
      "Eating the right foods before your workout ensures your body has the energy it needs to perform at its best. The focus here should be on carbohydrates and a small amount of protein. Carbs provide a quick energy source, while protein helps to prime your muscles for the work ahead. Aim to eat 30–60 minutes before your workout, and consider these options:\n\n" +
      "- Bananas 🍌: Packed with potassium, they help maintain electrolyte balance and provide a quick energy boost.\n" +
      "- Oats 🥣: Rich in slow-digesting carbohydrates, oats give you sustained energy throughout your workout.\n" +
      "- Yogurt 🍦: A great source of protein and probiotics, yogurt helps to support muscle function and digestion.\n\n" +

      "➵ Post-Workout: Rebuild and Recover \n\n" +
      "Post-workout nutrition is all about recovery. After exercise, your muscles are primed for repair and replenishment, and your energy stores need to be refilled. The focus here should be on protein (for muscle repair) and carbohydrates (to restore glycogen). Ideally, consume a balanced post-workout meal or snack within 30–60 minutes to get the best results. Here are some great options:\n\n" +
      "- Chicken + Rice 🍗🍚: A classic post-workout meal that combines lean protein and complex carbs for muscle repair and energy restoration.\n" +
      "- Shakes 🥤: A protein shake with added carbs can be a quick and convenient option if you're short on time.\n" +
      "- Tofu + Quinoa 🥙: A perfect plant-based combo offering both protein and carbs to rebuild muscle and replenish energy.\n\n" +

      "➵ Why Timing Matters \n\n" +
      "Timing your meals is just as important as what you eat. By eating the right foods at the right times, you optimize your performance during your workout and enhance recovery afterward. Pre-workout meals help fuel your body, ensuring you have the energy to push yourself harder, while post-workout nutrition aids in muscle repair and growth. Proper timing of these meals ensures that your body gets the nutrients it needs when it needs them.\n\n" +

      "➵ Conclusion \n\n" +
      "Pre and post-workout nutrition are crucial to achieving your fitness goals, whether you're looking to improve performance, speed up recovery, or build muscle. Eating the right balance of carbs and protein before and after your workout ensures you're fueling your body for success. By choosing foods like bananas, oats, chicken, rice, and shakes, you're giving your body the fuel it needs to perform at its peak and recover faster. So next time you hit the gym, remember to fuel up before and refuel after to maximize your results! 💪🍽",
  },
  {
    id: 3,
    title: "The Power of Routine: Why Consistency in Your Workout Is Key",
    image: require("../assets/thumbnail_article_3.png"),
    screen: "ArticleDetail",
    content:
      "Consistency is the cornerstone of fitness. Whether you're a seasoned gym-goer or just starting, having a solid workout routine can make all the difference. Let's dive into why sticking to a workout routine is so crucial and how it can help you achieve your fitness goals faster.\n\n" +

      "➵ Why Routine Matters in the Gym 🏋️‍♀️ \n\n" +
      "-  Improves Results : Regular workouts allow your body to adapt and grow stronger over time. When you follow a consistent routine, you progressively challenge your muscles, which leads to better strength, endurance, and flexibility. 🚀\n" +
      "-  Builds Healthy Habits : Consistency turns exercise into a natural part of your daily routine, which makes it easier to stick to your fitness plan in the long run. It's no longer a chore but a lifestyle. 🔄\n" +
      "-  Increases Motivation : When you follow a structured routine, there's less mental fatigue deciding what to do next. You have a clear plan in place, making it easier to stay motivated. Plus, seeing progress over time naturally boosts your confidence and enthusiasm to continue. 🔥\n" +
      "-  Prevents Injuries : A balanced routine helps avoid overtraining any single muscle group, which can lead to overuse injuries. By working different muscle groups and allowing for rest, you're giving your body time to recover and grow stronger. 🛡️\n\n" +

      "➵ How Routine Affects Your Results 📊 \n\n" +
      "-  Muscle Memory : As you perform exercises regularly, your muscles become more efficient at the movements. This makes tasks easier and allows you to increase intensity as your strength improves. 🧠\n" +
      "-  Trackable Progress : With a set routine, it's easier to track how much you've improved. Whether it's lifting heavier weights, running faster, or doing more reps, consistency helps you measure success over time. 📈\n" +
      "-  Rest and Recovery : Rest days are just as important as workout days. Consistent routines allow for proper recovery, which is essential for muscle repair and growth. Make sure your routine includes rest to avoid burnout and injury. 🛏️\n\n" +

      "➵ Tips for Building Your Own Routine 🗓️ \n\n" +
      "-  Set Clear Goals : Before you create your routine, define your fitness goals. Whether you want to build muscle, lose fat, or improve endurance, having clear objectives will help guide your workouts. 🎯\n" +
      "-  Incorporate Variety : Mix up your workouts to keep them interesting and prevent plateaus. Include cardio, strength training, flexibility exercises, and mobility work to ensure a well-rounded routine. 🔄\n" +
      "-  Progress Gradually : Start with a manageable routine and increase intensity over time. Gradual progression prevents injuries and ensures that your body adapts to the challenges. ⚖️\n" +
      "-  Track Your Progress : Use a fitness app or journal to track your workouts. This allows you to see improvements in real-time and stay motivated by celebrating small wins. 📅\n" +
      "-  Be Consistent : Set a regular workout schedule and stick to it. Whether it's every morning or three times a week, consistency helps form a habit and keeps you on track. 🕒\n\n" +

      "➵ Overcoming Common Challenges 🚧 \n\n" +
      "-  Lack of Time : If you're short on time, try shorter, high-intensity interval training (HIIT) workouts. These are effective and can be done in under 30 minutes. ⏳\n" +
      "-  Lack of Motivation : Set small, achievable goals and reward yourself when you hit them. Whether it's hitting a new personal best or simply showing up for the gym, every success counts. 🎉\n" +
      "-  Plateaus : If you're stuck in a rut, change things up. Try new exercises, increase the weight, or focus on different muscle groups to push through plateaus and keep challenging your body. 🔄\n\n" +

      "➵ Conclusion 🏅 \n\n" +
      "A consistent workout routine is the key to achieving long-term success in the gym. Whether you're building muscle, losing weight, or improving overall fitness, routine helps you stay on track and make continuous progress. The more consistent you are, the faster you'll reach your goals. Start small, stay committed, and let your routine lead you to success! 👟💥"
  },
  {
    id: 4,
    title: "Sugar Smart: How To Cut Added Sugar Without Going Crazy",
    image: require("../assets/thumbnail_article_4.png"),
    screen: "ArticleDetail",
    content:
      "We all know that too much sugar isn't good for us, but did you know that added sugars are hidden in more foods than you might think? From the obvious culprits like candy and soda, to sneaky sources in salad dressings, sauces, and even bread, added sugar can be found in nearly every corner of the supermarket. Understanding food labels, identifying hidden sugars, and swapping out sugary snacks for healthier alternatives can make a big difference in your health. Let's dive into how you can cut added sugar without losing your sanity.\n\n" +

      "➵ Understanding Hidden Sugars \n\n" +
      "First things first: it's crucial to become a savvy label reader. Many packaged foods contain added sugars under different names, making it tricky to spot them. Here are some common hidden sugars you might encounter on labels:\n\n" +
      "- Sucrose\n" +
      "- High-fructose corn syrup\n" +
      "- Honey\n" +
      "- Agave nectar\n" +
      "- Maple syrup\n" +
      "- Molasses\n" +
      "- Corn syrup solids\n" +
      "- Fruit juice concentrate\n\n" +
      "These sugars may sound natural, but they still spike your blood sugar and contribute to excess calories. When scanning food labels, look for these terms to identify added sugars, and aim for products with minimal added sweeteners.\n\n" +

      "➵ Healthier Snack and Drink Alternatives \n\n" +
      "Cutting back on sugar doesn't mean you have to sacrifice taste or flavor. You can easily swap out sugary snacks and drinks for healthier options that still satisfy your cravings:\n\n" +
      "- Instead of soda: Try sparkling water with a splash of lemon or a natural iced tea. 🍋\n" +
      "- Instead of candy: Opt for fresh fruit like berries or apple slices with a little nut butter for sweetness and fiber. 🍓🍏\n" +
      "- Instead of sugary yogurt: Choose plain Greek yogurt and add your own toppings like a drizzle of honey or some chia seeds. 🍯\n" +
      "- Instead of store-bought cookies: Make energy balls with oats, nuts, and a small amount of dark chocolate. 🍫\n\n" +
      "Making these simple swaps will not only reduce your sugar intake, but they'll also provide you with more nutrients, fiber, and protein to keep you satisfied longer.\n\n" +

      "➵ Benefits of Cutting Back on Added Sugar \n\n" +
      "Cutting back on added sugar has numerous benefits, from improved weight management to better heart health. Here are some of the major health perks you can expect when you reduce your sugar intake:\n\n" +
      "-  Weight loss : Sugar is calorie-dense but doesn't keep you full, leading to overeating. Cutting sugar helps prevent those unnecessary extra calories.\n" +
      "-  Better blood sugar control : Reducing added sugar helps maintain steady blood glucose levels, which is especially important for those with diabetes.\n" +
      "-  Reduced risk of chronic diseases : Lowering your sugar intake decreases the risk of obesity, heart disease, and fatty liver disease.\n" +
      "-  Improved mood and energy : High sugar intake can cause energy spikes followed by crashes. By cutting back, you stabilize your energy levels and mood.\n\n" +

      "➵ Conclusion \n\n" +
      "Cutting back on added sugar doesn't have to be an all-or-nothing approach, and it doesn't mean you have to give up everything sweet in life. By learning how to read labels, identifying hidden sugars, and making healthier swaps like choosing fresh fruit over candy or sparkling water instead of soda, you can significantly reduce your sugar intake without feeling deprived. With all the health benefits—including weight loss, better blood sugar control, and more stable energy levels—it's definitely worth making the effort. Your body will thank you! 🍎🚫🍬"
  },
  {
    id: 5,
    title: "Meal Prep 101: Save Time, Eat Better",
    image: require("../assets/thumbnail_article_5.png"),
    screen: "ArticleDetail",
    content:
      "Mastering Meal Prep: The Key to Healthy Eating Without the Stress  🥦🍱🕒\n\n" +
      "Meal prepping is a game-changer for anyone looking to eat healthier while saving time during the week. It's all about planning, preparing, and portioning your meals in advance so that when hunger strikes, you already have a nutritious option ready to go. 🧠💪 Whether you're a busy professional, student, or just looking to streamline your cooking process, meal prep can help you stay on track with your health goals without the stress. Let's dive into the basics of meal prepping, including how to plan, cook, and store meals effectively. 🧑‍🍳📦\n\n" +

      "➵ The Basics of Meal Prepping  🛠️🥗\n\n" +
      "Meal prepping involves three key steps: planning, cooking, and storing. 📝🔥❄️ Start by planning your meals for the week. Choose simple, nutritious meals that you can easily batch cook, like grilled chicken with vegetables, stir-fries, or rice and beans. 🍗🥦🍚 Then, create a grocery list and stick to it. A few key tools will make meal prep a breeze:\n\n" +
      "-  Containers  📦: Use BPA-free, microwave-safe containers that are leak-proof to store your meals. Consider glass containers for long-term storage, as they don't stain or retain odors.\n" +
      "-  Kitchen Scale  ⚖️: A scale helps with portioning, ensuring that your meals are balanced in terms of protein, carbs, and veggies.\n" +
      "-  Meal Prep Trays  🍽️: If you're prepping individual portions, these trays help keep meals organized and easy to grab when you're in a rush.\n\n" +
      "With your tools ready, the next step is batch cooking. Cook large quantities of your chosen meals, then divide them into individual portions to store in the fridge or freezer. ❄️🍛 This ensures you'll have a healthy meal ready at any time without needing to cook from scratch every day.\n\n" +

      "➵ Meal Prep Ideas & 3-Day Prep Plan  📅🍽️\n\n" +
      "Let's make meal prepping easy with a 3-day sample plan:\n\n" +
      " Day 1: \n" +
      "🥗 Lunch: Grilled chicken with quinoa and steamed broccoli.\n" +
      "🍲 Dinner: Turkey chili with beans and brown rice.\n\n" +
      " Day 2: \n" +
      "🥙 Lunch: Quinoa salad with mixed greens, avocado, chickpeas, and a lemon-tahini dressing.\n" +
      "🐟 Dinner: Baked salmon with sweet potato and green beans.\n\n" +
      " Day 3: \n" +
      "🥢 Lunch: Stir-fried tofu with brown rice and mixed veggies.\n" +
      "🍝 Dinner: Spaghetti with marinara sauce and a side of sautéed spinach.\n\n" +
      "These meals are simple, nutritious, and easy to prepare in large batches. 🍴🥦 Cook everything in one go, divide it into containers, and you're set for the next three days. 🚀\n\n" +

      "➵ How to Stay Consistent with Meal Prep  🧘‍♂️🧊🛒\n\n" +
      "Consistency is key to successful meal prepping. Here are a few tips to help you stay on track:\n\n" +
      "-  Prep in bulk  🧑‍🍳: Cook larger portions so that you don't have to worry about cooking every day.\n" +
      "-  Mix it up  🎨: Don't be afraid to experiment with new recipes or ingredients each week to keep things interesting.\n" +
      "-  Storage  📦: Store meals in clear containers, so you can easily see what you have. Make sure to label the meals with dates to keep track of freshness. 🗓️\n" +
      "-  Snack prep  🍎: Don't forget about snacks! Portion out things like nuts, fruits, or homemade energy bars to grab on the go.\n\n" +

      "➵ Conclusion  ✅🍴\n\n" +
      "Meal prepping is an easy and effective way to save time, eat better, and stay on top of your health goals. 💡🥗 By planning your meals, cooking in bulk, and storing everything properly, you can eliminate the stress of last-minute cooking and ensure you have healthy options available whenever you need them. 🙌 Whether you're new to cooking or just looking to simplify your routine, meal prepping can help you stay organized and consistent in your healthy eating journey. Start small, stay consistent, and watch how much time and effort you save each week! 💪⏳"
  },
  {
    id: 6,
    title: "Build Your Plate Right: The Basics Of Balanced Eating",
    image: require("../assets/thumbnail_article_6.png"),
    screen: "ArticleDetail",
    content:
      "Eating a balanced diet doesn't have to be complicated—sometimes, simplicity is the key! One of the best and easiest ways to structure your meals is by using the \"Balanced Plate\" method. This method helps you divide your plate into three sections, ensuring that you're getting the right nutrients in the right proportions.\n\n" +
      "👉 Half of your plate: Vegetables and fruits 🍎🥦\n\n" +
      "👉 A quarter of your plate: Protein 🍗🍳\n\n" +
      "👉 A quarter of your plate: Carbohydrates 🍠🍚\n\n" +
      "The goal is to fill up your plate with healthy, colorful foods that fuel your body in the right way. Vegetables and fruits provide essential vitamins, minerals, and fiber that help with digestion and keep your body running smoothly. Protein is crucial for muscle repair and growth, while carbohydrates provide the energy needed to power through your day.\n\n" +
      
      "➵ How to Build Your Plate\n\n" +
      "Now, let's make it practical! When planning your meals, try to think of your plate like a canvas. You want a mix of colors and textures to make it both delicious and nutritious. Here are some tips for each section:\n\n" +
      "🍓 Fruits & Vegetables:\nGo for a rainbow on your plate. Dark leafy greens (like spinach, kale, and broccoli) are packed with vitamins and minerals. Add some bright fruits, like berries, oranges, or apples, for that sweet punch of antioxidants.\n\n" +
      "🍗 Protein:\nChoose lean options like chicken, turkey, or fish. If you're plant-based, beans, lentils, tofu, and tempeh are great alternatives that are rich in protein and fiber.\n\n" +
      "🍞 Carbohydrates:\nOpt for whole grains like quinoa, brown rice, or sweet potatoes. These provide fiber, help keep your blood sugar levels stable, and give you sustained energy.\n\n" +
      
      "➵ Why Portioning Matters\n\n" +
      "When you follow the \"Balanced Plate\" method, you're not just making your meals look pretty—you're ensuring your body gets the nutrients it needs to thrive. Proper portioning has several benefits:\n\n" +
      "- Sustained energy: No more sugar crashes or feeling sluggish. With balanced meals, you keep your energy levels steady all day.\n\n" +
      "- Better digestion: The fiber from fruits, veggies, and whole grains helps keep things moving smoothly.\n\n" +
      "- Improved performance: Whether you're working, exercising, or just going through your daily tasks, eating the right proportions will help you perform better, both physically and mentally.\n\n" +
      
      "➵ Conclusion\n\n" +
      "Balancing your plate is a simple but effective way to improve your overall health. By following the \"Balanced Plate\" method—half veggies and fruit, a quarter protein, and a quarter carbs—you're giving your body what it needs to function optimally. It's easy to follow, customizable to your tastes, and helps you feel energized and satisfied. So, next time you sit down for a meal, use this method to make your plate a powerhouse of nutrition! 🌟\n\n\n\n\n\n"
  },
  {
    id: 7,
    title: "Smart Snacking: Healthy Between-Meal Options That Worked",
    image: require("../assets/thumbnail_article_7.png"),
    screen: "ArticleDetail",
    content:
      "Smart Snacking: How to Curb Cravings and Stay on Track  🍏🥜😋\n\n" +
      "Snacking can be a double-edged sword—it can either support your health goals or sabotage them. ⚖️ The key to smart snacking is choosing the right combinations that will fuel your body, not derail your progress. 🚀 Whether you're trying to manage your weight, beat cravings, or simply stay energized between meals, snacking wisely can make a huge difference. 🌟\n\n" +

      "➵ Snack Combos Under 200 Calories  🔢🍎\n\n" +
      "When it comes to snacks, portion control is key. 🧮 Here are some snack ideas that are nutrient-dense and under 200 calories:\n\n" +
      "- 🍏  Apple slices with almond butter : A combo of fiber and healthy fats that will keep you feeling satisfied.\n" +
      "- 🍧  Greek yogurt with chia seeds : Protein-packed and full of fiber, this snack is great for digestive health.\n" +
      "- 🧀  Cottage cheese with cucumber : A refreshing snack that's high in protein and low in calories.\n" +
      "- 🥕🥚  Hard-boiled eggs and baby carrots : A perfect protein-and-fiber combo to power you through your day.\n" +
      "- 🌱  Hummus and celery sticks : A creamy dip paired with crunchy veggies for a satisfying, low-calorie treat.\n\n" +
      "These snacks are balanced with a good mix of protein, fiber, and healthy fats, making them perfect for staying full without consuming excess calories. 💯\n\n" +

      "➵ Protein + Fiber-Rich Snacks  💪🌾\n\n" +
      "Protein and fiber are the powerhouses when it comes to keeping you full and satisfied. 💥 Combining these nutrients will help you manage hunger and keep your blood sugar levels stable. 🔄 Here are a few snack options that pack both:\n\n" +
      "- 🥄  Chia pudding  (made with chia seeds and almond milk): High in fiber and packed with plant-based protein.\n" +
      "- 🌿  Roasted chickpeas : A crunchy, fiber-filled snack that provides a good amount of protein.\n" +
      "- 🌰  Trail mix with nuts and seeds : Go for a mix of almonds, walnuts, and pumpkin seeds for a protein boost with fiber.\n" +
      "- 🟢  Edamame : These green beans are loaded with protein and fiber, and they make for a great on-the-go snack.\n\n" +
      "These snacks provide sustained energy ⚡, prevent overeating 🍽️, and help regulate digestion. 💚\n\n" +

      "➵ DIY vs. Store-Bought Snacks  🏠🛍️\n\n" +
      "While store-bought snacks can be convenient, they often come with hidden sugars, unhealthy fats, and excess calories. 🚫 DIY snacks give you full control over the ingredients and portion sizes, making them a healthier choice. 💪\n\n" +
      "For example, instead of reaching for a sugary granola bar, try making your own version with oats, nuts, and a drizzle of honey. 🍯 This way, you know exactly what's going into your snack and can avoid unwanted additives.\n\n" +
      "On the other hand, if you're in a pinch and need a quick option, look for snacks that have minimal ingredients and are high in protein and fiber. For instance:\n" +
      "- ✅ Pre-packaged nuts\n" +
      "- ✅ Protein bars (low sugar)\n" +
      "- ✅ Single-serve hummus with veggies\n\n" +

      "➵ When and Why to Snack  ⏰🤔\n\n" +
      "Snacking isn't just about satisfying hunger—it can also be a strategy to optimize your energy levels and prevent overeating during meals. 💡 Here's when to snack and why:\n\n" +
      "- 🕓  Between meals : If there's a long gap between meals and you're feeling hungry, a smart snack can prevent you from overeating at your next meal.\n" +
      "- 🏋️‍♂️  After exercise : A protein-rich snack will help with muscle recovery and replenish energy stores.\n" +
      "- 😋  To beat cravings : Healthy snacks can satisfy your sweet or salty cravings without overindulging in empty-calorie foods.\n\n" +

      " Emotional Eating and Late-Night Cravings  🌙🍫\n\n" +
      "One of the biggest challenges with snacking is emotional eating—eating not because you're physically hungry, but because you're stressed, bored, or upset. 😞 Recognizing the difference between physical hunger and emotional hunger is key to managing cravings. 🧠💡 Instead of reaching for unhealthy snacks, try alternatives like:\n\n" +
      "- 🧘  Mindful breathing  to reduce stress\n" +
      "- 💧  Drinking water  to curb cravings\n" +
      "- 🍫  Choosing dark chocolate  (in moderation) to satisfy a craving without going overboard\n\n" +
      "As for late-night cravings, try to avoid eating heavy, high-sugar snacks close to bedtime. 🌜 Opt for lighter, more satisfying snacks like:\n" +
      "- 🥜 A handful of almonds\n" +
      "- 🍓 A small bowl of mixed berries\n\n" +

      "➵ Conclusion  🧠🍿\n\n" +
      "Smart snacking is all about making informed choices. 📚 By focusing on protein and fiber, sticking to snacks under 200 calories, and choosing whole foods over processed options, you'll support your health goals while staying satisfied between meals. 🙌 Remember, snacking isn't the enemy—it's about choosing snacks that work for you and help keep your hunger and cravings in check. 🧭 With the right mindset and snack options, you can stay on track and make your hunger work in your favor! 💪🥒🍎"
  },
  {
    id: 8,
    title: "The Power Of Sleep: Unlocking The Secret To A Healthier You",
    image: require("../assets/thumbnail_article_8.png"),
    screen: "ArticleDetail",
    content:
      "The Power of Sleep: How Rest Impacts Your Health and Wellness  🛌💤🌙\n\n" +
      "We all know sleep is important, but how much do we really understand its impact on our health? 🤔 Sleep is not just a break from your daily routine—it's a vital part of maintaining good health, energy, and mental well-being. 🧠💪 In this article, we'll dive into the importance of sleep, the science behind it, and tips on how to improve your sleep quality so you can live a healthier, more energized life. 🌟😴\n\n" +

      "➵ Why Sleep Matters  🌙🛏️\n\n" +
      "Sleep is a crucial component of overall health that often gets overlooked. While you're sleeping, your body is working hard to repair and rejuvenate itself. 🧬💡 From strengthening your immune system to helping your muscles recover, sleep plays a role in almost every aspect of your well-being. Here's how:\n\n" +
      "- 🔧  Restores Physical Health : During deep sleep, your body repairs tissue and muscles, releases growth hormones, and recharges your cells. This helps you recover from daily stress and physical exertion.\n" +
      "- 🧠  Boosts Mental Clarity : Sleep enhances brain function by allowing your brain to consolidate memories, process information, and clear out toxins. This improves focus, concentration, and problem-solving abilities.\n" +
      "- ⚖️  Regulates Hormones : A good night's sleep helps balance hormones that control appetite, stress, and energy. Lack of sleep can lead to overeating, weight gain, and mood swings.\n" +
      "- 😊  Supports Emotional Well-Being : Sleep affects your mood and emotional state. Chronic sleep deprivation can lead to irritability, anxiety, and even depression.\n\n" +

      "➵ How Much Sleep Do You Really Need?  ⏰🛌\n\n" +
      "The amount of sleep needed varies by age and individual needs. 📊 However, most adults require between  7 to 9 hours  of sleep per night for optimal health. 💤 Children and teenagers need even more to support their growing bodies and minds:\n\n" +
      "- 👶 Newborns (0-3 months): 14–17 hours\n" +
      "- 👼 Infants (4-11 months): 12–15 hours\n" +
      "- 🚼 Toddlers (1-2 years): 11–14 hours\n" +
      "- 🧒 Children (3-5 years): 10–13 hours\n" +
      "- 🧑‍🏫 School-age (6-13 years): 9–11 hours\n" +
      "- 🧑‍🎓 Teens (14-17 years): 8–10 hours\n\n" +
      "Consistently getting  less than 7 hours  can negatively impact your body and mind. 😵\n\n" +

      "➵ The Stages of Sleep: Understanding the Cycle  🔄💤\n\n" +
      "Sleep isn't just about quantity— quality  matters too. ✅ Sleep is divided into two main types:  REM (Rapid Eye Movement)  and  non-REM  sleep. Here's a breakdown:\n\n" +
      " Non-REM Sleep: \n" +
      "- Stage 1: Light sleep, easily awakened. 🌙\n" +
      "- Stage 2: Body relaxes, heart rate and temperature drop. 🫀❄️\n" +
      "- Stage 3: Deep sleep—muscle recovery and cell repair happen. 🛠️💪\n\n" +
      " REM Sleep: \n" +
      "This is the dream stage. 💤🧠 It's crucial for memory consolidation and emotional processing. REM periods get longer toward the morning. 🌅\n\n" +
      "A balanced mix of both REM and non-REM sleep is essential for full-body recovery. 🧘‍♀️💫\n\n" +

      "➵ Tips for Improving Sleep Quality  🌛🧘‍♂️📵\n\n" +
      "Even if you get enough hours, poor quality sleep can still leave you tired. 🥱 Here are practical tips to improve your sleep:\n\n" +
      "- 🕰️  Create a Sleep Schedule : Go to bed and wake up at the same time daily—even on weekends!\n" +
      "- 🛋️  Optimize Your Environment : Keep your room cool, dark, and quiet. Use blackout curtains, earplugs, or white noise machines. 🛏️🪟🎧\n" +
      "- ☕  Limit Caffeine and Alcohol : Avoid coffee and alcohol a few hours before bed—they interfere with sleep cycles. ❌🥤🍷\n" +
      "- 🧘  Practice Relaxation : Try deep breathing, stretching, or meditation before bed to wind down. 🧘‍♀️💤\n" +
      "- 📵  Reduce Screen Time : Avoid screens 30–60 minutes before sleep to protect your melatonin levels. 📴📱\n" +
      "- 🏃  Stay Active : Regular exercise helps improve deep sleep—but avoid intense workouts too close to bedtime. 🏋️‍♂️🚫🌙\n\n" +

      "➵ The Impact of Sleep Deprivation  🚫😴⚠️\n\n" +
      "Chronic lack of sleep can take a serious toll. Here's what it can lead to:\n\n" +
      "- 🤒  Weakened Immunity : You're more likely to get sick if you don't sleep enough.\n" +
      "- 🍟  Weight Gain : Hormonal imbalances can lead to overeating and fat storage.\n" +
      "- ❤️  Chronic Illness Risk : Higher risk of heart disease, diabetes, and hypertension.\n" +
      "- 🧠  Cognitive Decline : Memory loss, poor decision-making, and reduced focus.\n\n" +

      "➵ Conclusion  🌌✅\n\n" +
      "Sleep is not a luxury—it's a  necessity  for your body and brain to function properly. 🌠 By making sleep a priority, you're investing in better energy, mood, and long-term health. 💖😴 Start making small changes to your routine tonight and enjoy the lasting benefits of deep, restful sleep. Sweet dreams! 🛏️💤✨"
  },
];


export default function NutritionTips({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg_nutrition.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.darkOverlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Nutrition Tips</Text>
          <Text style={styles.subtitle}>
            Your Choices, Your Awareness, Your Impact
          </Text>

          <View style={styles.cardContainer}>
            {articles.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() =>
                  navigation.navigate(item.screen, {
                    title: item.title,
                    image: item.image,
                    content: item.content,
                  })
                }
              >
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: "Unbounded",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "UnboundedRegular",
    color: "#CFED89",
    textAlign: "center",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 2,
  },
  card: {
    width: (width - 60) / 2,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardText: {
    fontSize: 9,
    fontFamily: "UnboundedSemiBold",
    color: "#121A00",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    marginStart: 2,
    marginEnd: 2,
    // paddingHorizontal: 0,
  },
});
