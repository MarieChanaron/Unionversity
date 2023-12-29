import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number; 
  eventType: 'courses' | 'groups';
}

const searchEvents = (options: SearchEventsOptions) => {
  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
  return events.filter(event => typeof options.query === 'number' && event.id === options.query || typeof options.query === 'string' && event.keywords.includes(options.query));
}

let enrolledEvents: (Course | StudyGroup)[] = [];

const enroll = (event: Course | StudyGroup) => {
  enrolledEvents.push(event);
}

console.log(searchEvents(
  {
    query: 1,
    eventType: 'courses'
  }
));

console.log(searchEvents(
  {
    query: 'art',
    eventType: 'groups'
  }
));
