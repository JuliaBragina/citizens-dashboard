import test from 'node:test'
import assert from 'node:assert/strict'
import { citizens } from '../data/citizens.js'
import { prepareCitizen, validateCitizen } from './citizenForm.js'

test('all existing citizens can be saved without requiring missing optional data', () => {
  for (const citizen of citizens) assert.deepEqual(validateCitizen(prepareCitizen(citizen)), {})
})

test('preparing changes does not mutate original data or the draft', () => {
  const draft = structuredClone(citizens[0])
  draft.fullName = '  Новое имя  '
  draft.educationRecords[0].startYear = '2010'
  const prepared = prepareCitizen(draft)
  assert.equal(prepared.fullName, 'Новое имя')
  assert.equal(prepared.educationRecords[0].startYear, 2010)
  assert.equal(draft.fullName, '  Новое имя  ')
  assert.equal(draft.educationRecords[0].startYear, '2010')
  assert.equal(citizens[0].fullName, 'Иванова Анна Сергеевна')
})

test('required fields, email and future birth dates are validated', () => {
  const draft = structuredClone(citizens[0])
  draft.fullName = '   '
  draft.email = 'wrong-address'
  draft.birthDate = '2999-01-01'
  const errors = validateCitizen(prepareCitizen(draft))
  assert.ok(errors['main-fullName'])
  assert.ok(errors['main-email'])
  assert.ok(errors['main-birthDate'])
})

test('validation includes inactive related sections and date ordering', () => {
  const draft = structuredClone(citizens[0])
  draft.family[0].fullName = ''
  draft.educationRecords[0].endYear = 1901
  draft.work[0].endDate = '2000-01-01'
  const errors = validateCitizen(prepareCitizen(draft))
  assert.ok(errors[`family-${draft.family[0].id}-fullName`])
  assert.ok(errors[`education-${draft.educationRecords[0].id}-endYear`])
  assert.ok(errors[`work-${draft.work[0].id}-endDate`])
})
