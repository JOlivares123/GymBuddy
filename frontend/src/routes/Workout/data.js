export const data = {
  programs: [
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
                weight: 135,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 8 \n arms @ 4",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Neutral Bench Press Machine",
              goal: {
                weight: 180,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "legs @ 10 \n arms @ 5",
              muscles_worked: ["Chest"],
            },
            {
              workout_name: "Cable Upper Back Row",
              goal: {
                weight: 123,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- elbows out and pull to sternum with neutral grip bar",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Cable Upper Lat Row",
              goal: {
                weight: 110,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "- hands with neutral grip and push elbows and hands down to floor",
              muscles_worked: ["Lats"],
            },
            {
              workout_name: "Cable Low Lat Pulldown",
              goal: {
                weight: 100,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "- long bar\n- body straight up and hands on outer edge of bar \n- pull elbows to top of hips",
              muscles_worked: ["Lats"],
            },
          ],
        },
        // shoulder + glute
        {
          id: 1293,
          workouts_needed: [
            {
              workout_name: "Shoulder Press - front",
              goal: {
                weight: 55,
                sets: 3,
                min_reps: 5,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "cable side shoulder raise",
              goal: {
                weight: 15,
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
              notes: null,
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: "Single Leg Press - Glute biased",
              goal: {
                weight: 220,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "booty to back of seat and one leg on the floor and leg on bottom/top of plat (dont allow knee to bend too much)",
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
              workout_name: "single crossbody tricep extension",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "- do assisted ones to help push\n- cable @ 15 \n use single cable",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "overhead tricep extension",
              goal: {
                weight: 65,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "- cable @ 10 and drop down to 60lbs",
              muscles_worked: ["Tricep"],
            },
            {
              workout_name: "Cable faceaway bicep ez curl",
              goal: {
                weight: 70,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "- cable @ 0 & drop down to 65",
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: "cable hammer curl",
              goal: {
                weight: 60,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes:
                "- chest up and elbow in front of delt and lean forward a bit & cable @ 0",
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
                "Brace (hold breath at top) then plant feet into ground then push butt out",
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: "Hack Squat",
              goal: {
                weight: 130,
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
                weight: 240,
                sets: 2,
                min_reps: 6,
                max_reps: 8,
              },
              notes: null,
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: "Single Leg Press - Glute biased",
              goal: {
                weight: 220,
                sets: 3,
                min_reps: 6,
                max_reps: 8,
              },
              notes: "booty to back of seat and one leg on the floor",
              muscles_worked: ["Glutes"],
            },
            {
              workout_name: "Calf Press",
              goal: {
                weight: 215,
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
      // 3.5 mins in secs
      rest_duration: 210,
      name: "PPL",
      days: [
        // pull
        {
          id: 116,
          workouts_needed: [
            {
              workout_name: "Cable faceaway bicep curl",
              goal: {
                weight: 30,
                sets: 3,
                min_reps: 6,
                max_reps: 9,
              },
              notes: "pushfjfj111f",
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
              notes: "pushf1123jfjf",
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
              notes: "pushfjfjf345",
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
              notes: "pu1123shfjfjf",
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: "Lat Row",
              goal: {
                weight: 142,
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
            notes: "pushfjfjf high line",
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
              notes: "pushf134jfjf",
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
              notes: "pus12344555hfjfjf",
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
              notes: "pushfjfjf",
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
              notes: "pushfjfjf1245678",
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
              notes: "pushfjfjf1111 must go high and hold at the bottom",
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
              notes: "85858585r8 this is crazy man go deep",
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
            notes: null,
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
              notes: "pushfjfjf",
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
              notes: "pushfjfj454677f",
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
              notes: "pushfjfjf1111111",
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
              notes: "pushfjf314134jf",
              muscles_worked: ["Shoulder"],
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
