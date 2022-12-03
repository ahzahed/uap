export const Menu = [
  {
    title: 'People',
    id: 2,
    subMenus: [
      {
        title: 'Faculty',
        slug: 'faculty',
      },
      {
        title: 'Staff',
        slug: 'staff',
      },
    ],
  },

  {
    title: 'Admission',
    id: 3,
    subMenus: [
      {
        title: 'Admission Info Graduate',
        slug: 'admission-info-graduate',
      },
      {
        title: 'Admission Info Undergraduate',
        slug: 'admission-info-undergraduate',
      },

      { title: 'Admission Result', slug: 'admission-result' },
      { title: 'Financial Aid', slug: 'tuition-waiver-financial-aid' },
    ],
  },
  {
    title: 'Academic',
    id: 4,
    subMenus: [
      { title: 'Tuition Fees', slug: 'tuition-fees' },
      { title: 'Explore', slug: 'explore' },
      {
        title: 'Notice Board',
        slug: 'notice-board',
      },
      { title: 'Gallery', slug: 'academic/gallery' },
      {
        title: 'Research and publication',
        slug: 'academic/research-publications',
      },
      { title: 'Graduate Curriculum', slug: 'graduate-curriculum' },
      {
        title: 'Undergraduate Curricular',
        slug: 'undergraduate-curriculum',
      },
      { title: 'Mission Outcome', slug: 'mission-outcome' },
      { title: 'Class Schedule', slug: 'class-schedule' },
      { title: 'Exam Schedule', slug: 'exam-schedule' },
      { title: 'Project and thesis list', slug: 'project-thesis-list' },
    ],
  },
  {
    title: 'News and Information',
    id: 5,
    subMenus: [
      // { title: 'Events', slug: 'academic/events' }, //Old events
      { title: 'Events', slug: 'events' }, // New Events
      { title: 'Seminar and workshop', slug: 'seminar-workshop' },
    ],
  },

  {
    title: 'Facilities',
    id: 7,
    subMenus: [{ title: 'Facilities', slug: '/facilities' }],
  },

  {
    title: 'Alumni',
    id: 8,
    subMenus: [
      { title: 'Alumni', slug: '/alumni' },
      { title: 'Alumni Associates', slug: '/alumni-associate' },
    ],
  },
]
