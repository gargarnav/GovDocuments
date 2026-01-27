
import { Book, CreditCard, UserCheck, Truck } from 'lucide-react';

export const services = [
    {
        id: 'passport',
        title: 'Indian Passport',
        description: 'Apply for fresh or reissue of passport',
        iconName: 'Book',
        requirements: [
            {
                type: 'Proof of Address',
                description: 'Any one of the following:',
                options: ['Aadhaar Card', 'Electricity Bill', 'Rent Agreement', 'Water Bill', 'Gas Connection Proof']
            },
            {
                type: 'Proof of Date of Birth',
                description: 'Any one of the following:',
                options: ['Birth Certificate', 'School Leaving Certificate', 'Aadhaar Card', 'PAN Card']
            },
            {
                type: 'Photo Requirements',
                description: 'Recent colored photograph with white background',
                specs: '4.5cm x 3.5cm'
            }
        ],
        fileSpecs: {
            photo: { format: 'JPEG', size: '10KB - 200KB' },
            docs: { format: 'PDF', size: 'Max 2MB' }
        }
    },
    {
        id: 'aadhaar',
        title: 'Aadhaar Card',
        description: 'Update details or apply for new Aadhaar',
        iconName: 'UserCheck',
        requirements: [
            {
                type: 'Identity Proof',
                description: 'Any one document containing Name and Photo:',
                options: ['Passport', 'PAN Card', 'Voter ID', 'Driving License']
            },
            {
                type: 'Address Proof',
                description: 'Any one document containing Name and Address:',
                options: ['Passport', 'Bank Statement', 'Post Office Account Statement', 'Ration Card']
            }
        ],
        fileSpecs: {
            docs: { format: 'PDF/JPEG', size: 'Max 2MB per document' }
        }
    },
    {
        id: 'pan',
        title: 'PAN Card',
        description: 'Permanent Account Number application',
        iconName: 'CreditCard',
        requirements: [
            {
                type: 'Proof of Identity',
                description: 'Copy of:',
                options: ['Aadhaar Card', 'Voter ID', 'Driving License', 'Passport']
            },
            {
                type: 'Proof of Address',
                description: 'Copy of:',
                options: ['Aadhaar Card', 'Voter ID', 'Driving License', 'Passport', 'Utility Bill']
            },
            {
                type: 'Proof of Date of Birth',
                description: 'Copy of:',
                options: ['Birth Certificate', 'Matriculation Certificate', 'Mark Sheet of recognized board']
            }
        ],
        fileSpecs: {
            photo: { format: 'JPEG', size: '3.5cm x 2.5cm, 20-50KB' },
            signature: { format: 'JPEG', size: '2cm x 4.5cm, 10-20KB' },
            docs: { format: 'PDF', size: 'Max 300KB' }
        }
    },
    {
        id: 'driving-license',
        title: 'Driving License',
        description: 'Learner\'s or Permanent License',
        iconName: 'Truck',
        requirements: [
            {
                type: 'Age Proof',
                description: 'Any one:',
                options: ['Birth Certificate', 'School Leaving Certificate', 'Passport', 'PAN Card']
            },
            {
                type: 'Address Proof',
                description: 'Any one:',
                options: ['Aadhaar Card', 'Passport', 'Voter ID', 'LIC Policy Bond']
            },
            {
                type: 'Learner\'s License',
                description: 'Required if applying for Permanent License',
                options: ['Original Learner\'s License']
            }
        ],
        fileSpecs: {
            docs: { format: 'JPEG/PDF', size: 'Max 500KB' },
            photo: { format: 'JPEG', size: 'Max 20KB' },
            signature: { format: 'JPEG', size: 'Max 10-20KB' }
        }
    }
];
