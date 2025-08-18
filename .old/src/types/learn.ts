export interface LearningResource {
    id: string;
    title: string;
    description: string;
    url: string;
    type: 'article' | 'guide' | 'video' | 'tool' | 'infographic';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    readTime: number;
    isExternal: boolean;
}

export interface LearningTopic {
    id: string;
    title: string;
    description: string;
    icon: string;
    summary: string;
    keyTakeaways: string[];
    resources: LearningResource[];
    quickReadContent: string;
    infoGraphic?: {
        url: string;
        alt: string;
        caption: string;
    };
}

export interface LearningSection {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    topics: LearningTopic[];
}

export interface LearningProgress {
    userId?: string;
    completedTopics: string[];
    bookmarkedRessources: string[];
    lastAccessed: string;
}