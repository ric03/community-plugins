/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TemplateExample } from '@backstage/plugin-scaffolder-node';

import yaml from 'yaml';

const exampleValue =
  'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const id = 'regex:replace';

export const examples: TemplateExample[] = [
  {
    description: 'Create a regex to capture the first word of a string',
    example: yaml.stringify({
      steps: [
        {
          id: 'regexValues',
          action: id,
          name: 'Regex Values',
          input: {
            regExps: [
              {
                pattern: '^(\\S+).*$',
                replacement: '$1',
                values: [
                  { key: 'eg1', value: 'Hello world!' },
                  { key: 'eg2', value: 'Test world!' },
                ],
              },
            ],
          },
        },
      ],
    }),
  },
  {
    description: 'Create a regex to replace a word in a string',
    example: yaml.stringify({
      steps: [
        {
          id: 'regexValues',
          action: id,
          name: 'Regex Values',
          input: {
            regExps: [
              {
                pattern: 'dog',
                replacement: 'monkey',
                values: [
                  {
                    key: 'eg1',
                    value: exampleValue,
                  },
                ],
              },
              {
                pattern: 'Dog',
                replacement: 'ferret',
                flags: ['i'],
                values: [
                  {
                    key: 'eg2',
                    value: exampleValue,
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  },
  {
    description: 'Create a regex to replace a word globally in a string',
    example: yaml.stringify({
      steps: [
        {
          id: 'regexValues',
          action: id,
          name: 'Regex Values',
          input: {
            regExps: [
              {
                pattern: 'dog',
                replacement: 'monkey',
                flags: ['g'],
                values: [
                  {
                    key: 'eg1',
                    value: exampleValue,
                  },
                ],
              },
              {
                pattern: 'Dog',
                replacement: 'ferret',
                flags: ['gi'],
                values: [
                  {
                    key: 'eg2',
                    value: exampleValue,
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  },
];
