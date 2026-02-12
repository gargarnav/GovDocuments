
import {
    UserCheck, Truck, Landmark, GraduationCap,
    FileText, ShieldCheck, HeartPulse, Plane,
    CreditCard, Book, FileBadge
} from 'lucide-react';

export const categories = [
    { id: 'identity', title: 'Identity Documents', iconName: 'UserCheck', description: 'Aadhaar, PAN, Voter ID' },
    { id: 'travel', title: 'Travel Documents', iconName: 'Plane', description: 'Passport, Visa, OCI' },
    { id: 'certificates', title: 'Certificates', iconName: 'FileBadge', description: 'Birth, Caste, Income, Domicile' },
    { id: 'education', title: 'Education', iconName: 'GraduationCap', description: 'Scholarships, DigiLocker, ABC ID' },
    { id: 'banking', title: 'Banking & Tax', iconName: 'Landmark', description: 'ITR, GST, EPFO (Private/Financial)', isPrivate: true },
    { id: 'transport', title: 'Vehicle & Transport', iconName: 'Truck', description: 'Driving License, RC, FASTag' },
    { id: 'legal', title: 'Police & Legal', iconName: 'ShieldCheck', description: 'FIR, PCC, Marriage, Rent Agreement' },
    { id: 'health', title: 'Health & Welfare', iconName: 'HeartPulse', description: 'Ayushman, Ration Card, Pension' },
];

export const services = [
    // --- IDENTITY ---
    {
        id: 'aadhaar-new',
        slug: 'aadhaar-card',
        categoryId: 'identity',
        title: 'Aadhaar Enrolment (New)',
        description: 'Apply for a new 12-digit unique identity number.',
        iconName: 'UserCheck',
        requirements: [
            { type: 'Proof of Identity', description: 'Any one:', options: ['Passport', 'PAN Card', 'Voter ID', 'Driving License'] },
            { type: 'Proof of Address', description: 'Any one:', options: ['Passport', 'Bank Statement', 'Ration Card', 'Voter ID'] },
            { type: 'Proof of Birth', description: 'Any one:', options: ['Birth Certificate', 'SSLC Book/Certificate', 'Passport'] }
        ],
        fileSpecs: { docs: { format: 'Originals needed for verification', size: 'N/A' } }
    },
    {
        id: 'aadhaar-update',
        slug: 'aadhaar-card',
        categoryId: 'identity',
        title: 'Aadhaar Update',
        description: 'Update Name, DOB, Address, Photo, Mobile, or Email.',
        iconName: 'UserCheck',
        requirements: [
            { type: 'Proof of Identity/Address', description: 'Supporting document for the specific field being updated.', options: ['Passport', 'Voter ID', 'Driving License', 'Utility Bill (Address)'] }
        ],
        fileSpecs: { docs: { format: 'PDF/JPEG', size: 'Max 2MB' } }
    },
    {
        id: 'pan-new',
        slug: 'pan-card',
        categoryId: 'identity',
        title: 'New PAN Card',
        description: 'Permanent Account Number application (Form 49A).',
        iconName: 'CreditCard',
        requirements: [
            { type: 'Proof of Identity', options: ['Aadhaar Card', 'Voter ID', 'Passport'] },
            { type: 'Proof of Address', options: ['Aadhaar Card', 'Voter ID', 'Utility Bill'] },
            { type: 'Proof of DOB', options: ['Birth Certificate', 'Matriculation Certificate', 'Aadhaar Card'] }
        ],
        fileSpecs: { photo: { format: 'JPEG', size: '3.5x2.5cm, <50KB' }, signature: { format: 'JPEG', size: '2x4.5cm, <20KB' } }
    },
    {
        id: 'voter-new',
        slug: 'voter-id',
        categoryId: 'identity',
        title: 'New Voter ID',
        description: 'Register as a new voter (Form 6).',
        iconName: 'FileText',
        requirements: [
            { type: 'Passport Size Photo', specs: 'Latest color photo' },
            { type: 'Age Proof', options: ['Birth Certificate', 'Mark Sheet', 'Passport', 'PAN Card'] },
            { type: 'Address Proof', options: ['Aadhaar', 'Passport', 'Ration Card', 'Rent Agreement'] }
        ],
        fileSpecs: { photo: { format: 'JPEG', size: '<100KB' }, docs: { format: 'PDF/JPEG', size: '<2MB' } }
    },

    // --- TRAVEL ---
    {
        id: 'passport-fresh',
        slug: 'passport',
        categoryId: 'travel',
        title: 'Fresh Passport',
        description: 'Apply for a new Indian Passport.',
        iconName: 'Book',
        requirements: [
            { type: 'Proof of Address', options: ['Aadhaar', 'Electricity Bill', 'Rent Agreement', 'Bank Passbook'] },
            { type: 'Proof of DOB', options: ['Birth Certificate', 'School Leaving Certificate', 'PAN Card'] },
            { type: 'Non-ECR Proof', description: 'If eligible (Matriculation or above)', options: ['10th/12th Marksheet', 'Degree Certificate'] }
        ],
        fileSpecs: { photo: { format: 'JPEG', size: '<200KB (if online)' }, docs: { format: 'PDF', size: '<2MB' } }
    },
    {
        id: 'passport-reissue',
        slug: 'passport',
        categoryId: 'travel',
        title: 'Re-issue Passport',
        description: 'Renewal, damaged, or lost passport.',
        iconName: 'Book',
        requirements: [
            { type: 'Old Passport', description: 'Original first and last page self-attested copies' },
            { type: 'Proof of Address', description: 'Only if address has changed' },
            { type: 'FIR (For Lost)', description: 'Original FIR required for lost passport' }
        ],
        fileSpecs: { docs: { format: 'PDF', size: '<2MB' } }
    },

    // --- CERTIFICATES ---
    {
        id: 'birth-cert',
        slug: 'birth-certificate',
        categoryId: 'certificates',
        title: 'Birth Certificate',
        description: 'Application for birth registration.',
        iconName: 'FileBadge',
        requirements: [
            { type: 'Proof of Birth', description: 'Hospital Discharge Slip / Letter' },
            { type: 'Parents Identity', options: ['Aadhaar of Mother & Father'] },
            { type: 'Marriage Certificate', description: 'Optional but often requested' }
        ],
        fileSpecs: { docs: { format: 'JPEG/PDF', size: '<2MB' } }
    },
    {
        id: 'income-cert',
        slug: 'income-certificate',
        categoryId: 'certificates',
        title: 'Income Certificate',
        description: 'Proof of annual family income.',
        iconName: 'FileBadge',
        requirements: [
            { type: 'Identity Proof', options: ['Aadhaar Card', 'Voter ID'] },
            { type: 'Address Proof', options: ['Ration Card', 'Electricity Bill'] },
            { type: 'Income Proof', options: ['Salary Slip', 'Bank Statement', 'ITR Return'] },
            { type: 'Self Declaration', description: 'Signed affidavit declaring income' }
        ],
        fileSpecs: { docs: { format: 'PDF', size: '<1MB' } }
    },
    {
        id: 'caste-cert',
        slug: 'caste-certificate',
        categoryId: 'certificates',
        title: 'Caste Certificate (SC/ST/OBC)',
        description: 'Proof of caste/community.',
        iconName: 'FileBadge',
        requirements: [
            { type: 'Identity Proof', options: ['Aadhaar'] },
            { type: 'Residence Proof', options: ['Ration Card', 'Voter ID'] },
            { type: 'Caste Proof', description: 'Caste certificate of father/blood relative', options: ['Father\'s Certificate', 'School Leaving Cert mentioning caste'] },
            { type: 'Income Proof', description: 'For OBC Non-Creamy Layer' }
        ],
        fileSpecs: { docs: { format: 'PDF', size: '<2MB' } }
    },
    {
        id: 'domicile-cert',
        slug: 'domicile-certificate',
        categoryId: 'certificates',
        title: 'Domicile Certificate',
        description: 'Proof of residence for quota/jobs.',
        iconName: 'FileBadge',
        requirements: [
            { type: 'Identity Proof', options: ['Aadhaar', 'Voter ID'] },
            { type: 'Proof of Residence', options: ['10+ years schooling', 'Electricity Bill'] },
            { type: 'Land Records', description: 'Khasra/Khatauni (if applicable)' }
        ],
        fileSpecs: { docs: { format: 'PDF', size: '<2MB' } }
    },

    // --- EDUCATION ---
    {
        id: 'scholarship-nsp',
        categoryId: 'education',
        title: 'National Scholarship Portal',
        description: 'Apply for Central/State scholarships.',
        iconName: 'GraduationCap',
        requirements: [
            { type: 'Student Photo', specs: 'Recent passport size' },
            { type: 'Verification Form', description: 'Bonafide Student Certificate from Institute' },
            { type: 'Income Certificate', description: 'Valid for current year' },
            { type: 'Identity', options: ['Aadhaar Card'] },
            { type: 'Academic Record', options: ['Previous Year Marksheet'] },
            { type: 'Bank Account', description: 'Student\'s Bank Passbook (Aadhaar Seeded)' }
        ],
        fileSpecs: { photo: { format: 'JPEG', size: '<200KB' }, docs: { format: 'PDF/JPEG', size: '<200KB' } }
    },
    {
        id: 'digilocker',
        categoryId: 'education',
        title: 'DigiLocker Account',
        description: 'Store and access documents digitally.',
        iconName: 'GraduationCap',
        requirements: [
            { type: 'Mobile Number', description: 'Must be linked to Aadhaar' },
            { type: 'Aadhaar Number', description: 'For authentication' }
        ],
        fileSpecs: { info: { format: 'N/A', size: 'Account Setup only' } }
    },

    // --- BANKING & TAX (PRIVATE) ---
    {
        id: 'itr-filing',
        categoryId: 'banking',
        title: 'ITR Filing',
        description: 'Income Tax Return documents.',
        iconName: 'Landmark',
        requirements: [
            { type: 'Form 16', description: 'Issued by employer' },
            { type: 'Bank Statement', description: 'Iterest income details' },
            { type: 'Aadhaar & PAN', description: 'Must be linked' },
            { type: 'Investment Proofs', options: ['LIC Premium', 'PPF', 'ELSS Statement (80C)', 'Medical Insurance (80D)'] }
        ],
        fileSpecs: { docs: { format: 'PDF', size: 'N/A' } }
    },
    {
        id: 'gst-reg',
        categoryId: 'banking',
        title: 'GST Registration',
        description: 'For businesses/proprietorships.',
        iconName: 'Landmark',
        requirements: [
            { type: 'PAN Card', description: 'Of Business or Proprietor' },
            { type: 'Aadhaar Card', description: 'Of Proprietor/Promoters' },
            { type: 'Business Address Proof', options: ['Electricity Bill', 'Rent Agreement', 'NOC from owner'] },
            { type: 'Bank Proof', options: ['Cancelled Cheque', 'Passbook Front Page'] }
        ],
        fileSpecs: { photo: { format: 'JPEG', size: '<100KB' }, docs: { format: 'PDF/JPEG', size: '<1MB' } }
    },
    {
        id: 'epfo-kyc',
        categoryId: 'banking',
        title: 'EPFO / UAN KYC',
        description: 'PF account activation and update.',
        iconName: 'Landmark',
        requirements: [
            { type: 'Aadhaar', description: 'Must be seeded' },
            { type: 'PAN Card', description: 'For verification' },
            { type: 'Bank Account', description: 'IFSC and Account Number' }
        ],
        fileSpecs: { docs: { format: 'PDF/JPEG', size: '<2MB' } }
    },

    // --- TRANSPORT ---
    {
        id: 'driving-license',
        slug: 'driving-licence',
        categoryId: 'transport',
        title: 'Driving License',
        description: 'Learner\'s or Permanent License.',
        iconName: 'Truck',
        requirements: [
            { type: 'Age Proof', options: ['Birth Certificate', 'School Cert', 'Passport'] },
            { type: 'Address Proof', options: ['Aadhaar', 'Passport', 'Voter ID'] },
            { type: 'Learner License', description: 'Required for Permanent DL' },
            { type: 'Form 1A', description: 'Medical Certificate (if > 40 years)' }
        ],
        fileSpecs: { docs: { format: 'JPEG/PDF', size: '<500KB' }, photo: { format: 'JPEG', size: '<20KB' } }
    },
    {
        id: 'vehicle-rc',
        categoryId: 'transport',
        title: 'Vehicle RC',
        description: 'Registration Certificate services.',
        iconName: 'Truck',
        requirements: [
            { type: 'Form 20', description: 'Application for Registration' },
            { type: 'Sales Certificate', description: 'From dealer' },
            { type: 'Insurance', description: 'Valid motor insurance' },
            { type: 'Address Proof', description: 'Owner\'s address proof' },
            { type: 'PUC', description: 'Pollution Under Control certificate' }
        ],
        fileSpecs: { docs: { format: 'PDF/JPEG', size: '<2MB' } }
    },

    // --- POLICE & LEGAL ---
    {
        id: 'police-pcc',
        categoryId: 'legal',
        title: 'Police Clearance (PCC)',
        description: 'For employment or visa.',
        iconName: 'ShieldCheck',
        requirements: [
            { type: 'Passport', description: 'Valid Passport' },
            { type: 'Address Proof', description: 'Present address proof' }
        ],
        fileSpecs: { docs: { format: 'PDF', size: '<2MB' } }
    },
    {
        id: 'marriage-cert',
        categoryId: 'legal',
        title: 'Marriage Certificate',
        description: 'Registration of Marriage.',
        iconName: 'ShieldCheck',
        requirements: [
            { type: 'Marriage Invitation', description: 'Wedding Card' },
            { type: 'Photos', description: 'Wedding photos + Joint photo of couple' },
            { type: 'Identity & Address', description: 'Bride and Groom' },
            { type: 'Witnesses', description: 'ID proof of 3 witnesses' }
        ],
        fileSpecs: { photo: { format: 'JPEG', size: '<5MB' } }
    },

    // --- HEALTH ---
    {
        id: 'ayushman',
        categoryId: 'health',
        title: 'Ayushman Bharat (PMJAY)',
        description: 'Health ID and Insurance Card.',
        iconName: 'HeartPulse',
        requirements: [
            { type: 'Aadhaar Card', description: 'Mandatory for family members' },
            { type: 'Ration Card', description: 'Family ID document' },
            { type: 'Mobile Number', description: 'Active number for OTP' }
        ],
        fileSpecs: { docs: { format: 'Scan Originals', size: 'N/A' } }
    },
    {
        id: 'ration-card',
        slug: 'ration-card',
        categoryId: 'health',
        title: 'Ration Card',
        description: 'New card or member addition.',
        iconName: 'HeartPulse',
        requirements: [
            { type: 'Head of Family', description: 'Passport size photo' },
            { type: 'Identity Proof', options: ['Aadhaar', 'Voter ID'] },
            { type: 'Address Proof', options: ['Electricity Bill', 'Water Bill'] },
            { type: 'Income Certificate', description: 'For subsidized categories' }
        ],
        fileSpecs: { docs: { format: 'PDF/JPEG', size: '<200KB' } }
    },
];
