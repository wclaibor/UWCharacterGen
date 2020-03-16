import { Career } from './careers'
import { Origin } from './origins'

export interface Move {
  name: string
  description: string
}

export const moves: { moveSource: Origin | Career; moves: Move[] }[] = [
  {
    moveSource: 'Academic',
    moves: [
      {
        name: 'Education',
        description: `When you gain one or more Data Points
      about a subject, each ally that was present
      or involved also gains a Data Point about
      the subject.`,
      },
      {
        name: 'Chemistry',
        description: `When creating an antidote, vaccine, drug,
        poison or pathogen in a lab, state the
        effect you want it to have and its method
        of transmission (spray, injector, pill, etc).
        Roll+Expertise.
        On a 10+, you successfully create it.
        On a 7-9, it will have reduced potency or
        have unintended side effects.`,
      },
      {
        name: 'Surgery',
        description: `When using a medical facility, your Patch
        Up can be used to install prosthetics and
        perform surgical reconstruction on living
        beings. This treats critical injuries.`,
      },
      {
        name: 'Deduction',
        description: `When you first witness a situation, you
        may ask one of the following questions,
        the GM will answer honestly.
        Who or what…
        • is most vulnerable in this situation?
        • is most dangerous in this situation?
        • caused this situation?`,
      },
      {
        name: 'Technobabble',
        description: `You can Command crew using Expertise
        rather than Influence. Subjects of your
        Command can perform minor technical
        or scientific tasks, no matter their skill
        set.`,
      },
    ],
  },
]
