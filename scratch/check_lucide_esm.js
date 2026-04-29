import * as lucide from 'lucide-react';
console.log('Keys count:', Object.keys(lucide).length);
console.log('GitHub:', !!lucide.Github || !!lucide.GithubIcon || !!lucide.GithubIcon);
console.log('LinkedIn:', !!lucide.Linkedin || !!lucide.LinkedinIcon);
console.log('Twitter:', !!lucide.Twitter || !!lucide.TwitterIcon);
console.log('Sample Git:', Object.keys(lucide).filter(k => k.toLowerCase().includes('git')));
