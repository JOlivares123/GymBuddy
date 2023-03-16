export const data = {
  programs: [
    {
      id: 1,
      // 3 mins in ms
      rest_duration: 180000,
      name: "My Fave :)",
      days: [
        {
          id: 112,
          cardio: {
            name: "running",
            // 15 mins in ms
            duration: 900000,
          },
          workouts_needed: [
            {
              workout_name: ["Incline Bench Press"],
              goal: [
                {
                  weight: 120,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Neutral Bench Press"],
              goal: [
                {
                  weight: 160,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Cable Upper Back Pulldown"],
              goal: [
                {
                  weight: 140,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: ["Lat Row"],
              goal: [
                {
                  weight: 142,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Lats"],
            },
            {
              workout_name: ["Shoulder Press - front"],
              goal: [
                {
                  weight: 55,
                  sets: 2,
                  min_reps: 5,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // arms
        {
          id: 113,
          cardio: {
            name: "incline treadmill",
            // 10 mins in ms
            duration: 600000,
          },
          workouts_needed: [
            {
              workout_name: [
                "double crossbody tricep extension",
                "single tricep push down",
              ],
              goal: [
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Tricep", "Tricep"],
            },
            {
              workout_name: ["Cable faceaway bicep curl"],
              goal: [
                {
                  weight: 30,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Dumbbell hammer curl"],
              goal: [
                {
                  weight: 32.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Spider curl machine"],
              goal: [
                {
                  weight: 70,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["rear delt cable fly"],
              goal: [
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // legs
        {
          id: 114,
          cardio: {
            name: "incline treadmill",
            // 10 mins in ms
            duration: 600000,
          },
          workouts_needed: [
            {
              workout_name: ["dumbbell RDL"],
              goal: [
                {
                  weight: 180,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: ["Hack Squat"],
              goal: [
                {
                  weight: 210,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Quads", "Glutes"],
            },
            {
              workout_name: ["quad extension"],
              goal: [
                {
                  weight: 220,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Quads"],
            },
            {
              workout_name: ["hamstring curl"],
              goal: [
                {
                  weight: 240,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: ["side shoulder raise"],
              goal: [
                {
                  weight: 27.5,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      // 3.5 mins in ms
      rest_duration: 210000,
      name: "PPL",
      days: [
        // pull
        {
          id: 116,
          cardio: {
            name: "running",
            // 15 mins in ms
            duration: 900000,
          },
          workouts_needed: [
            {
              workout_name: ["Cable faceaway bicep curl"],
              goal: [
                {
                  weight: 30,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Dumbbell hammer curl"],
              goal: [
                {
                  weight: 32.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Spider curl machine"],
              goal: [
                {
                  weight: 70,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Cable Upper Back Pulldown"],
              goal: [
                {
                  weight: 140,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: ["Lat Row"],
              goal: [
                {
                  weight: 142,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Lats"],
            },
          ],
        },
        // Pull
        {
          id: 117,
          cardio: {
            name: "incline treadmill",
            // 10 mins in ms
            duration: 600000,
          },
          workouts_needed: [
            {
              workout_name: ["Incline Bench Press"],
              goal: [
                {
                  weight: 120,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Neutral Bench Press"],
              goal: [
                {
                  weight: 160,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Decline Bench Press"],
              goal: [
                {
                  weight: 180,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Shoulder Press - front"],
              goal: [
                {
                  weight: 55,
                  sets: 2,
                  min_reps: 5,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: [
                "double crossbody tricep extension",
                "single tricep push down",
              ],
              goal: [
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Tricep", "Tricep"],
            },
            {
              workout_name: ["rear delt cable fly"],
              goal: [
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // legs
        {
          id: 118,
          cardio: {
            name: "incline treadmill",
            // 10 mins in ms
            duration: 600000,
          },
          workouts_needed: [
            {
              workout_name: ["dumbbell RDL"],
              goal: [
                {
                  weight: 180,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: ["Hack Squat"],
              goal: [
                {
                  weight: 210,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Quads", "Glutes"],
            },
            {
              workout_name: ["quad extension"],
              goal: [
                {
                  weight: 220,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Quads"],
            },
            {
              workout_name: ["hamstring curl"],
              goal: [
                {
                  weight: 240,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: ["side shoulder raise"],
              goal: [
                {
                  weight: 27.5,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      // 4 mins in ms
      rest_duration: 240000,
      name: "CRAZY TIME",
      days: [
        // pull
        {
          id: 130,
          cardio: {
            name: "running",
            // 15 mins in ms
            duration: 900000,
          },
          workouts_needed: [
            {
              workout_name: ["Cable faceaway bicep curl"],
              goal: [
                {
                  weight: 30,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Dumbbell hammer curl"],
              goal: [
                {
                  weight: 32.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Spider curl machine"],
              goal: [
                {
                  weight: 70,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Bicep"],
            },
            {
              workout_name: ["Cable Upper Back Pulldown"],
              goal: [
                {
                  weight: 140,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Upper Back"],
            },
            {
              workout_name: ["Lat Row - forward"],
              goal: [
                {
                  weight: 142,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Lats"],
            },
            {
              workout_name: ["Lat Row - leaned back"],
              goal: [
                {
                  weight: 122,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Lats"],
            },
          ],
        },
        // Pull
        {
          id: 117,
          cardio: {
            name: "incline treadmill",
            // 10 mins in ms
            duration: 600000,
          },
          workouts_needed: [
            {
              workout_name: ["Incline Bench Press"],
              goal: [
                {
                  weight: 120,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Neutral Bench Press"],
              goal: [
                {
                  weight: 160,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Decline Bench Press"],
              goal: [
                {
                  weight: 180,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Chest"],
            },
            {
              workout_name: ["Shoulder Press - front"],
              goal: [
                {
                  weight: 55,
                  sets: 2,
                  min_reps: 5,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
            {
              workout_name: [
                "double crossbody tricep extension",
                "single tricep push down",
              ],
              goal: [
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Tricep", "Tricep"],
            },
            {
              workout_name: ["rear delt cable fly"],
              goal: [
                {
                  weight: 27.5,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
        // legs
        {
          id: 118,
          cardio: {
            name: "incline treadmill",
            // 10 mins in ms
            duration: 600000,
          },
          workouts_needed: [
            {
              workout_name: ["dumbbell RDL"],
              goal: [
                {
                  weight: 180,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Hamstrings", "Glutes"],
            },
            {
              workout_name: ["Hack Squat"],
              goal: [
                {
                  weight: 210,
                  sets: 3,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Quads", "Glutes"],
            },
            {
              workout_name: ["quad extension"],
              goal: [
                {
                  weight: 220,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Quads"],
            },
            {
              workout_name: ["hamstring curl"],
              goal: [
                {
                  weight: 240,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 8,
                },
              ],
              muscles_worked: ["Hamstrings"],
            },
            {
              workout_name: ["side shoulder raise"],
              goal: [
                {
                  weight: 27.5,
                  sets: 2,
                  min_reps: 6,
                  max_reps: 9,
                },
              ],
              muscles_worked: ["Shoulder"],
            },
          ],
        },
      ],
    },
  ],
};
