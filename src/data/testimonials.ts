export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sarah',
    name: 'Sarah Mitchell',
    role: 'HR Director at Nexa Solutions',
    avatar: '/avatars/sarah_mitchell.png',
    rating: 5.0,
    quote:
      '“CoreShift has streamlined our HR processes, making tasks like onboarding and performance tracking more efficient. It helps us stay organized and saves our team time, allowing us to focus more on supporting our employees.”',
  },
  {
    id: 'james',
    name: 'James Carter',
    role: 'HR Manager at BrightPath Solutions',
    avatar: '/avatars/james_carter.png',
    rating: 5.0,
    quote:
      '“The platform is easy to use, keeps everything in one place, and helps our team stay on top of things without extra hassle.”',
  },
];
