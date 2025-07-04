export const data = {
  programs: [
    {
      id: 200,
      // 2.33 mins in secs
      rest_duration: 140,
      name: "Upper Lower",
      days: [
        {
          id: 110,
          workouts_needed: [
            // Chest
            {
              workout_name: "Incline Dumbbell Bench Press",
              goal: {
                weight: 45,
                sets: 4,
                min_reps: 9,
                max_reps: 15,
              },
              notes: "@ 4/5 & barbell - 15 reps",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press Machine",
              goal: {
                weight: 110,
                sets: 4,
                min_reps: 10,
                max_reps: 15,
              },
              notes: "legs @ 10 \n arms @ 1",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Cable Lat Row",
              goal: {
                weight: 77,
                sets: 4,
                min_reps: 16,
                max_reps: 20,
              },
              notes: null,
              muscles_worked: ["Lats"],
            },
            // Back
            {
              workout_name: "Bicep Curls",
              goal: {
                weight: 20,
                sets: 5,
                min_reps: 13,
                max_reps: 20,
              },
              notes: null,
              muscles_worked: ["Biceps"],
            },
            {
              workout_name: "Tricep Overhead Extension",
              goal: {
                weight: 16.5,
                sets: 3,
                min_reps: 13,
                max_reps: 18,
              },
              notes: null,
              muscles_worked: ["Triceps"],
            },
            {
              workout_name: "Side Delt Raise Dumbbell ",
              goal: {
                weight: 15,
                sets: 3,
                min_reps: 9,
                max_reps: 15,
              },
              notes: null,
              muscles_worked: ["Side Delts"],
            },
          ],
        },
        {
          id: 1293,
          workouts_needed: [
            {
              workout_name: "Single Leg Leg Press",
              goal: {
                weight: 60,
                sets: 5,
                min_reps: 10,
                max_reps: 18,
              },
              notes: "legs @ 1 ",
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "RDL",
              goal: {
                weight: 50,
                sets: 4,
                min_reps: 12,
                max_reps: 18,
              },
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: "Single Leg Calve Raise",
              goal: {
                weight: 30,
                sets: 4,
                min_reps: 10,
                max_reps: 16,
              },
              notes: null,
              muscles_worked: ["Calves"],
            },
            {
              workout_name: "Quad Extensions",
              goal: {
                weight: 40,
                sets: 3,
                min_reps: 12,
                max_reps: 18,
              },
              notes: null,
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 12,
                max_reps: 18,
              },
              notes: null,
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Leg Curl",
              goal: {
                weight: 15,
                sets: 4,
                min_reps: 9,
                max_reps: 15,
              },
              notes: null,
              muscles_worked: ["Hamstrings"],
            },
          ],
        },
        // arms
        {
          id: 113,
          workouts_needed: [
            {
              workout_name: "Bent Over Back Row",
              goal: {
                weight: 60,
                sets: 4,
                min_reps: 9,
                max_reps: 15,
              },
              notes: null,
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Bent Over Lat Row",
              goal: {
                weight: 60,
                sets: 4,
                min_reps: 11,
                max_reps: 15,
              },
              notes: null,
              muscles_worked: ["Lats"],
            },
            {
              workout_name: "Chest Fly",
              goal: {
                weight: 90,
                sets: 4,
                min_reps: 12,
                max_reps: 18,
              },
              notes: "- seat @4)",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Tricep Overhead Extension",
              goal: {
                weight: 16.5,
                sets: 5,
                min_reps: 13,
                max_reps: 18,
              },
              notes: null,
              muscles_worked: ["Triceps"],
            },
            {
              workout_name: "Bicep Curls",
              goal: {
                weight: 20,
                sets: 3,
                min_reps: 13,
                max_reps: 20,
              },
              notes: null,
              muscles_worked: ["Biceps"],
            },
            {
              workout_name: "Side Delt Raise Dumbbell ",
              goal: {
                weight: 15,
                sets: 3,
                min_reps: 9,
                max_reps: 15,
              },
              notes: null,
              muscles_worked: ["Side Delts"],
            },
          ],
        },
        // legs
        {
          id: 114,

          workouts_needed: [
            {
              workout_name: "Single Leg Leg Press",
              goal: {
                weight: 60,
                sets: 5,
                min_reps: 10,
                max_reps: 18,
              },
              notes: "legs @ 1 ",
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "Hamstring Curls",
              goal: {
                weight: 90,
                sets: 5,
                min_reps: 14,
                max_reps: 18,
              },
              notes: null,
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: "Single Leg Calve Raise",
              goal: {
                weight: 30,
                sets: 4,
                min_reps: 10,
                max_reps: 16,
              },
              notes: null,
              muscles_worked: ["Calves"],
            },
            {
              workout_name: "Quad Extensions",
              goal: {
                weight: 40,
                sets: 4,
                min_reps: 12,
                max_reps: 16,
              },
              notes: null,
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 12,
                max_reps: 18,
              },
              notes: null,
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "RDL",
              goal: {
                weight: 50,
                sets: 4,
                min_reps: 12,
                max_reps: 18,
              },
              muscles_worked: ["Hamstrings", "Glutes"],
            },
          ],
        },
      ],
    },
    {
      id: 100,
      // 2.33 mins in secs
      rest_duration: 140,
      name: "Rehab V2",
      days: [
        {
          id: 110,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            // Chest
            {
              workout_name: "Incline Barbell Bench Press",
              goal: {
                weight: 85,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 9",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press Machine",
              goal: {
                weight: 140,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 10 \n arms @ 6",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Chest Fly",
              goal: {
                weight: 110,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @4   \n arms @ 3rd hole",
              muscles_worked: ["Chest"],
            },
            // Back
            {
              workout_name: "Cable Upper Back Row",
              goal: {
                weight: 120,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- pull with elbows and angled out.",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Single Hand Cable Lat Pulldown",
              goal: {
                weight: 77,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "go back a bit and pull down with elbow. On eccentric, go up and get a stretch.",
              muscles_worked: ["Upper Lats"],
            },
            {
              workout_name: "Single Hand Cable Row",
              goal: {
                weight: 60,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "use neutral grip attachment and pull elbows back and to the floor",
              muscles_worked: ["Lower Lats"],
            },
          ],
        },
        // shoulder
        {
          id: 1293,
          workouts_needed: [
            {
              workout_name: "Shoulder Press Machine - front",
              goal: {
                weight: 85,
                sets: 3,
                min_reps: 5,
                max_reps: 8,
              },
              notes: "legs @ 7 and arms @ 6",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "DB + cable side shoulder superset raise",
              goal: {
                weight: 18.5,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- start with dumbbell and end w/ cables @ 4",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "rear delt cable fly",
              goal: {
                weight: 120,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: "legs @ 6",
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // arms
        {
          id: 113,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "Tricep Mechanical Dropset",
              goal: {
                weight: 44,
                sets: 3,
                min_reps: 15,
                max_reps: 18,
              },
              notes: "- cable @ 18",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "Bicep Curl Machine",
              goal: {
                weight: 60,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- seat @6 (65lbs?)",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bicep hammer curl machine",
              goal: {
                weight: 62.5,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: " Seat @6 (65lbs?)",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bayesian Curl",
              goal: {
                weight: 33,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "- cable @ 4 and have elbows tucked and arm externally rotated",
              muscles_worked: ["Bicep"],
            },
          ],
        },
        // legs
        {
          id: 114,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "quad extension",
              goal: {
                weight: 4,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: "use 4 for single leg and 7 for double leg",
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "RDL",
              goal: {
                weight: 135,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes:
                "ensure both feet are screwed in and ensure knees are out.",
              muscles_worked: ["Hamstring"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 120,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: "warm up with hip openers",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Hip Abduction Machine",
              goal: {
                weight: 150,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
            },
            {
              workout_name: "Hack Squat",
              goal: {
                weight: 90,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes:
                "warm up with single leg squats; ensure left leg activated. Ensure you drop down the middle and don't lean to one side.",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Calf Press",
              goal: {
                weight: 150,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Calves"],
            },
          ],
        },
      ],
    },

    {
      id: 2,
      // 2.33 mins in secs
      rest_duration: 140,
      name: "PPL",
      days: [
        // Push: Chest, tricep, delts
        {
          id: 110,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            // Chest
            {
              workout_name: "Incline Chest Press",
              goal: {
                weight: 65,
                sets: 3,
                min_reps: 8,
                max_reps: 12,
              },
              notes: "legs @ 3 & arms @ 3",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press Machine",
              goal: {
                weight: 140,
                sets: 3,
                min_reps: 8,
                max_reps: 12,
              },
              notes: "legs @ 10 \n arms @ 4",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Chest Fly",
              goal: {
                weight: 110,
                sets: 3,
                min_reps: 8,
                max_reps: 12,
              },
              notes: "legs @4   \n arms @ 3rd hole",
              muscles_worked: ["Chest"],
            },
            // tricep
            {
              workout_name: "Tricep Mechanical Dropset",
              goal: {
                weight: 44,
                sets: 3,
                min_reps: 15,
                max_reps: 18,
              },
              notes: "- cable @ 18",
              muscles_worked: ["Tricep"],
            },
            // side shoulder
            {
              workout_name: "DB side shoulder raise",
              goal: {
                weight: 20,
                sets: 3,
                min_reps: 10,
                max_reps: 15,
              },
              notes: "- start with dumbbell and end w/ cables @ 4",
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // Pull: Back, Bicep, Side delts
        {
          id: 1293,
          workouts_needed: [
            // Back
            {
              workout_name: "Cable Upper Back Row",
              goal: {
                weight: 70,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: "- pull with elbows and angled out. Try with barbell ",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Single Hand Cable Lat Pulldown",
              goal: {
                weight: 77,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "go back a bit and pull down with elbow. On eccentric, go up and get a stretch.",
              muscles_worked: ["Upper Lats"],
            },
            {
              workout_name: "Bent over lat row ",
              goal: {
                weight: 60,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes:
                "use neutral grip attachment and pull elbows back and to the floor",
              muscles_worked: ["Lower Lats"],
            },
            {
              workout_name: "Bicep Hammer Curl and Curl Superset",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: "Externally rotated and Hammer Curl",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Side delt raise",
              goal: {
                weight: 20,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: null,
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // arms
        {
          id: 113,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "Tricep Mechanical Dropset",
              goal: {
                weight: 44,
                sets: 3,
                min_reps: 15,
                max_reps: 18,
              },
              notes: "- cable @ 18",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "Bicep Curl Machine",
              goal: {
                weight: 60,
                sets: 2,
                min_reps: 10,
                max_reps: 11,
              },
              notes: "- seat @6 (65lbs?)",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bicep hammer curl machine",
              goal: {
                weight: 62.5,
                sets: 2,
                min_reps: 10,
                max_reps: 11,
              },
              notes: " Seat @6 (65lbs?)",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bayesian Curl",
              goal: {
                weight: 27,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes:
                "- cable @ 4 and have elbows tucked and arm externally rotated",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Incline Chest Press",
              goal: {
                weight: 50,
                sets: 3,
                min_reps: 10,
                max_reps: 11,
              },
              notes: "legs @ 3 and arms @ 3",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "DB + cable side shoulder superset raise",
              goal: {
                weight: 18.5,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- start with dumbbell and end w/ cables @ 4",
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // legs
        {
          id: 114,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "quad extension",
              goal: {
                weight: 90,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes: "seat @ 1, foot @ 2, and pad @ 3 ",
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "RDL",
              goal: {
                weight: 120,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes:
                "ensure both feet are screwed in and ensure knees are out.",
              muscles_worked: ["Hamstring"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 100,
                sets: 3,
                min_reps: 15,
                max_reps: 18,
              },
              notes: "warm up with hip openers",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Hip Abduction Machine",
              goal: {
                weight: 150,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
            },
            {
              workout_name: "Hack Squat",
              goal: {
                weight: 90,
                sets: 3,
                min_reps: 10,
                max_reps: 12,
              },
              notes:
                "warm up with single leg squats; ensure left leg activated. Ensure you drop down the middle and don't lean to one side.",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Calf Press",
              goal: {
                weight: 150,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Calves"],
            },
          ],
        },
      ],
    },

    {
      id: 0,
      // 3 mins in secs
      rest_duration: 180,
      name: "Rehab",
      days: [
        {
          id: 110,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "Incline Bench Press Machine",
              goal: {
                weight: 130,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 4 \n arms @ 2 OR bench on 4th hole from top",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press Machine",
              goal: {
                weight: 150,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 10 \n arms @ 6 OR flat bench use 140",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Cable Upper Back Pulldown",
              goal: {
                weight: 110,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- pull with elbows and angled out.",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Single Hand Cable Lat Pulldown",
              goal: {
                weight: 70,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "-chest @5 and legs @6 (these numbers show) \n- hands with neutral grip and push elbows and hands down to floor",
              muscles_worked: ["Upper Lats"],
            },
            {
              workout_name: "Forward Bent Cable Row",
              goal: {
                weight: 55,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "use neutral grip attachment and pull elbows back and to the floor",
              muscles_worked: ["Lower Lats"],
            },
          ],
        },
        // shoulder + glute
        {
          id: 1293,
          workouts_needed: [
            {
              workout_name: "Shoulder Press Machine - front",
              goal: {
                weight: 80,
                sets: 3,
                min_reps: 5,
                max_reps: 8,
              },
              notes: "legs @ 7 and arms @ 6",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "cable side shoulder raise",
              goal: {
                weight: 18.5,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- cables @ 2",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "rear delt cable fly",
              goal: {
                weight: 130,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "legs @ 6",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "Cable Squat",
              goal: {
                weight: 82,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "ensure knees are out. Push with feet",
              muscles_worked: ["Glutes"],
            },
          ],
        },
        // arms
        {
          id: 113,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "Tricep Mechanical Dropset",
              goal: {
                weight: 44,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- cable @ 17; 1st @ 40lbs, 2nd @40, 3rd @ 40",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "Bicep Curl Machine",
              goal: {
                weight: 57.5,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- seat @7",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bicep hammer curl machine",
              goal: {
                weight: 57.5,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- arms on outer edge and pull towards inside. Seat @7",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bayesian Curl",
              goal: {
                weight: 27.5,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "- cable @ 0 and have elbows tucked and arm externally rotated",
              muscles_worked: ["Bicep"],
            },
          ],
        },
        // legs
        {
          id: 114,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "quad extension",
              goal: {
                weight: 100,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "Cable Hip abduction",
              goal: {
                weight: 16,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "keep foot straight and lead with the heel",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 65,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "do lunge stretches and butterfly steches before. Plus do hip machines as well (inner: 110lbs + outer: 80lbs)",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Hip Abduction Machine",
              goal: {
                weight: 140,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
            },
            {
              workout_name: "Squats",
              goal: {
                weight: 82,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Calf Press",
              goal: {
                weight: 135,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Calves"],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      // 3 mins in secs
      rest_duration: 180,
      name: "My Fave :)",
      days: [
        {
          id: 112,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "Incline Bench Press Machine",
              goal: {
                weight: 140,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 4 \n arms @ 2 OR bench on 4th hole from top",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press Machine",
              goal: {
                weight: 175,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 10 \n arms @ 5 OR flat bench use 140",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Cable Upper Back Row",
              goal: {
                weight: 110,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- elbows out and pull to sternum with neutral grip bar",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Single Hand Cable Lat Pulldown",
              goal: {
                weight: 60,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "-chest @5 and legs @6 (these numbers show) \n- hands with neutral grip and push elbows and hands down to floor",
              muscles_worked: ["Upper Lats"],
            },
            {
              workout_name: "Cable Lat Pullover",
              goal: {
                weight: 40,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- cable @18",
              muscles_worked: ["Lower Lats"],
            },
          ],
        },
        // shoulder + glute
        {
          id: 1293,
          workouts_needed: [
            {
              workout_name: "Shoulder Press Machine - front",
              goal: {
                weight: 82.5,
                sets: 3,
                min_reps: 5,
                max_reps: 8,
              },
              notes: "legs @ 7 and arms @ 6",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "cable side shoulder raise",
              goal: {
                weight: 20,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- cables @ 2",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "rear delt cable fly",
              goal: {
                weight: 120,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "legs @ 6",
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 80,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "do lunge stretches and butterfly steches before. Plus do hip machines as well (inner: 110lbs + outer: 80lbs). Can do 100lbs",
              muscles_worked: ["Glutes"],
            },
          ],
        },
        // arms
        {
          id: 113,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "Tricep Mechanical Dropset",
              goal: {
                weight: 49,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- cable @ 17; 1st @ 49lbs, 2nd @43, 3rd @ 43",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "Bicep Curl Machine",
              goal: {
                weight: 60,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- seat @5",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bicep hammer curl machine",
              goal: {
                weight: 50,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- arms on outer edge and pull towards inside. Seat @5",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Bayesian Curl",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- cable @ 0",
              muscles_worked: ["Bicep"],
            },
          ],
        },
        // legs
        {
          id: 114,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "13 degrees incline at 2.5 speed",
          },
          workouts_needed: [
            {
              workout_name: "dumbbell/barbell RDL",
              goal: {
                weight: 195,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "Brace (hold breath at top) then plant feet into ground (all 3 points) then push butt out. Do 100lbs to get form better",
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: "Hack Squat",
              goal: {
                weight: 100,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes:
                "go deep and hold at bottom. Push lower back to seat and brace (hold breath)",
              muscles_worked: ["Quads", "Glutes"],
            },
            {
              workout_name: "quad extension",
              goal: {
                weight: 220,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "hamstring curl",
              goal: {
                weight: 140,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 4 and back @3",
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: "Hip Thrust",
              goal: {
                weight: 100,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "do lunge stretches and butterfly steches before. Plus do hip machines as well (inner: 110lbs + outer: 80lbs)",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Calf Press",
              goal: {
                weight: 145,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Calves"],
            },
          ],
        },
      ],
    },

    {
      id: 3,
      // 4 mins in secs
      rest_duration: 240,
      name: "CRAZY TIME",
      days: [
        // pull
        {
          id: 130,
          cardio: {
            name: "running",
            // 15 mins in ms
            duration: 900000,
            notes: null,
          },
          workouts_needed: [
            {
              workout_name: "Cable faceaway bicep curl",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "pushfjfjf",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Dumbbell hammer curl",
              goal: {
                weight: 32.5,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Spider curl machine",
              goal: {
                weight: 70,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "Cable Upper Back Pulldown",
              goal: {
                weight: 140,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "pushfjfjf467777544",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Lat Row - forward",
              goal: {
                weight: 142,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "pushfjfjf58585t8",
              muscles_worked: ["Lats"],
            },
            {
              workout_name: "Lat Row - leaned back",
              goal: {
                weight: 122,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Lats"],
            },
          ],
        },
        // Pull
        {
          id: 117,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "pushfjfjf  woah woah",
          },
          workouts_needed: [
            {
              workout_name: "Incline Bench Press",
              goal: {
                weight: 120,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "pushfjfj234534f",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press",
              goal: {
                weight: 160,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "pushfjfjf111",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Decline Bench Press",
              goal: {
                weight: 180,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Shoulder Press - front",
              goal: {
                weight: 55,
                sets: 2,
                min_reps: 5,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "double crossbody tricep extension",
              goal: {
                weight: 27.5,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "single tricep push down",
              goal: {
                weight: 27.5,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "pushfjfjf",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "rear delt cable fly",
              goal: {
                weight: 27.5,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: null,
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // legs
        {
          id: 118,
          cardio: {
            name: "incline treadmill",
            // 10 mins in secs
            duration: 600,
            notes: "pushfjfjf",
          },
          workouts_needed: [
            {
              workout_name: "dumbbell RDL",
              goal: {
                weight: 180,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: "Hack Squat",
              goal: {
                weight: 210,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "pushfjfjf",
              muscles_worked: ["Quads", "Glutes"],
            },
            {
              workout_name: "quad extension",
              goal: {
                weight: 220,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "pushfjfjf",
              muscles_worked: ["Quads"],
            },
            {
              workout_name: "hamstring curl",
              goal: {
                weight: 240,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: "side shoulder raise",
              goal: {
                weight: 27.5,
                sets: 2,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "pushfjfjf",
              muscles_worked: ["Shoulder"],
            },
          ],
        },
      ],
    },
  ],
};

// {
//   workout_name: "single crossbody tricep extension",
//   goal: {
//     weight: 30,
//     sets: 3,
//     min_reps: 6,
//     max_reps: 8,
//   },
//   notes:
//     "- do assisted ones to help push\n- cable @ 15 \n use single cable",
//   muscles_worked: ["Tricep"],
// },
// {
//   workout_name: "overhead tricep extension",
//   goal: {
//     weight: 65,
//     sets: 3,
//     min_reps: 6,
//     max_reps: 8,
//   },
//   notes: "- cable @ 10 and drop down to 60lbs",
//   muscles_worked: ["Tricep"],
// },
