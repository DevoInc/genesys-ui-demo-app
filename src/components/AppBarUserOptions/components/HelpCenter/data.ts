import type { THelpType } from './declarations';

export const helpCenterData: {
  label: string;
  description: string;
  type: THelpType;
}[] = [
  {
    label: 'Edit a custom finder',
    description:
      'Users with permission to manage finders can edit existing custom...',
    type: 'article',
  },
  {
    label: 'Create a custom finder',
    description:
      'Users with permission to manage finders can edit existing custom...',
    type: 'article',
  },
  {
    label: 'Use the aliased finder',
    description:
      'To use the aliased finder, you need the same permissions the default finder requires (at least the View level of the Finders permission). Visit Run a search using a finder!.',
    type: 'article',
  },
  {
    label: 'Run a search using a finder',
    description:
      'Types of finders There are three types of finders in Devo....article to know more about this type of finder.',
    type: 'article',
  },
  {
    label: 'Assign a custom finder to a role',
    description:
      'Only one custom finder can be assigned at a time and it substitutes the default finder. What permissions do I need to assign custom finder?',
    type: 'article',
  },
  {
    label: 'Add a search to your aliased finder',
    description:
      'To add searches to your aliased finder, you need access to data searches and thus you need the View level of the Finders permission. Visit Run a search using a finder!...Otherwise, click Yes, add now to add the search to the aliased finder. Searches in the aliased finder Once you add it to the aliased finder, the search is blocked',
    type: 'article',
  },
  {
    label: 'Selecting specific fields with the finder',
    description:
      'To use this feature you don’t need a specific permission apart from the View level of the Finders permission required to perform searches using finders. Visit this article!...to know more about finders. Selecting fields To do this, select the ellipsis on the final level of the tag and choose Select fields.',
    type: 'article',
  },
  {
    label: 'Create a query',
    description:
      'Learn about applying query operations using the search window.',
    type: 'walkthrough',
  },
  {
    label: 'Generate charts',
    description:
      'Create visual representations of info that facilitate data analysis.',
    type: 'walkthrough',
  },
];
