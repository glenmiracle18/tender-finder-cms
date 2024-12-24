import {defineType, defineField, defineArrayMember} from 'sanity'

// schemas/contract.js
export default {
  name: 'contract',
  title: 'Contract',
  type: 'document',
  fields: [
    {name: 'noticeIdentifier', title: 'Notice Identifier', type: 'string'},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'cpvDescription', title: 'CPV Description', type: 'string'},
    {name: 'publishedDate', title: 'Published Date', type: 'datetime'},
    {name: 'deadlineDate', title: 'Deadline Date', type: 'datetime'},
    {name: 'valueLow', title: 'Value Low', type: 'number'},
    {name: 'valueHigh', title: 'Value High', type: 'number'},
    {name: 'region', title: 'Region', type: 'string'},
    {name: 'start', title: 'Start Date', type: 'datetime'},
    {name: 'end', title: 'End Date', type: 'datetime'},
    {name: 'organisationName', title: 'Organisation Name', type: 'string'},
    {name: 'noticeStatus', title: 'Notice Status', type: 'string'},
    {name: 'isSuitableForSme', title: 'Suitable for SME', type: 'boolean'},
    {name: 'isSuitableForVco', title: 'Suitable for VCO', type: 'boolean'},
  ],
}
