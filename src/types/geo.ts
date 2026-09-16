export type KSRCluster =
  | 'fisik-kebumian'
  | 'lingkungan-kebencanaan'
  | 'manusia-keruangan';

export type ModuleId =
  | 'meteorologi-klimatologi'
  | 'oseanografi-hidrologi'
  | 'kebencanaan'
  | 'sumberdaya'
  | 'lingkungan-sdgs'
  | 'geomorfologi'
  | 'geologi'
  | 'geografi-pertanian'
  | 'kependudukan'
  | 'geografi-ekonomi'
  | 'geografi-pembangunan'
  | 'geografi-kota'
  | 'pariwisata'
  | 'geografi-budaya'
  | 'kartografi-sig';

export interface LessonSection {
  title: string;
  content: string;
  keyPoints: string[];
  osnTrap?: string;
  formula?: string;
  mnemonic?: string;
}

export interface GeoModule {
  id: ModuleId;
  ksrNumber: number; // 1 to 15 based on KSR Syllabus
  cluster: KSRCluster;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  sections: LessonSection[];
  interactiveVisualizer?: 'earth' | 'tectonic' | 'bowen' | 'hjulstrom' | 'contour' | 'atmosphere' | 'spatial';
  totalQuestions: number;
}

export interface Question {
  id: string;
  moduleId: ModuleId;
  difficulty: 'Kabupaten' | 'Provinsi' | 'Nasional';
  ksrCategory?: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  trapExplanation: string;
  formulaUsed?: string;
}

export interface Flashcard {
  id: string;
  moduleId: ModuleId;
  front: string;
  back: string;
  tag: string;
  mnemonic?: string;
}

export interface UserStats {
  xp: number;
  level: number;
  title: string;
  streak: number;
  completedLessons: string[];
  mastery: Record<ModuleId, number>; // 0 - 100
  quizHistory: {
    questionId: string;
    correct: boolean;
    timestamp: number;
  }[];
}
