export const data = {
  progams: [
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
              muscles_worked: ["chest"],
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
              muscles_worked: ["chest"],
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
              muscles_worked: ["Back"],
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
              muscles_worked: ["front shoulder"],
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
              muscles_worked: ["tricep", "tricep"],
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
              muscles_worked: ["long head - bicep"],
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
              muscles_worked: ["bicep"],
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
              muscles_worked: ["short head - bicep"],
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
              muscles_worked: ["back shoulder"],
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
              muscles_worked: ["hamstring + butt"],
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
              muscles_worked: ["quads + butt"],
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
              muscles_worked: ["quads"],
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
              muscles_worked: ["hamstrings"],
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
              muscles_worked: ["side shoulder"],
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
              muscles_worked: ["long head - bicep"],
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
              muscles_worked: ["bicep"],
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
              muscles_worked: ["short head - bicep"],
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
              muscles_worked: ["Back"],
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
              muscles_worked: ["chest"],
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
              muscles_worked: ["chest"],
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
              muscles_worked: ["front shoulder"],
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
              muscles_worked: ["tricep", "tricep"],
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
              muscles_worked: ["back shoulder"],
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
              muscles_worked: ["hamstring + butt"],
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
              muscles_worked: ["quads + butt"],
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
              muscles_worked: ["quads"],
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
              muscles_worked: ["hamstrings"],
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
              muscles_worked: ["side shoulder"],
            },
          ],
        },
      ],
    },
  ],
};
