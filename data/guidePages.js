/**
 * Long-tail SEO Guide Pages Database
 * Data-driven approach for 30+ guide pages on specific document requirements
 * Each guide targets a specific long-tail keyword with high intent
 */

export const guidePages = [
  // Passport Guides
  {
    slug: 'passport-renewal-after-expiry-documents',
    title: 'Passport Renewal After Expiry | Documents Required',
    description: 'Complete checklist of documents required for passport renewal after expiry in India. Learn file specifications and proof requirements.',
    h1: 'Passport Renewal After Expiry: Complete Document Checklist',
    category: 'travel',
    keywords: 'passport renewal documents, expired passport renewal, passport reissue documents',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Renewing an expired passport requires specific documents beyond the standard application. This guide covers all requirements for successful renewal without rejection.',
    requiredDocuments: [
      { type: 'Proof of Identity', description: 'One of:', options: ['Expired Passport', 'Aadhaar', 'Voter ID', 'Driving License'] },
      { type: 'Proof of Address', description: 'One of:', options: ['Utility Bill (not older than 3 months)', 'Aadhaar', 'Voter ID', 'Telephone Bill'] },
      { type: 'Proof of Date of Birth', description: 'One of:', options: ['Birth Certificate', 'SSLC Marksheet', 'Passport', 'PAN Card'] },
      { type: 'Expired Passport', description: 'Original copy', options: ['Original passport (expired)'] },
      { type: 'Recent Photograph', description: 'Size: 3.5cm x 4.5cm', options: ['4-6 color photographs'] }
    ],
    fileSpecs: { docs: { format: 'PDF/JPEG', size: 'Max 2MB each' }, photos: { format: 'JPEG/PNG', size: 'Actual size 3.5x4.5cm' } },
    faqItems: [
      { question: 'Can I renew a passport after it expires?', answer: 'Yes, you can renew an expired passport up to 3 years after expiry using the standard renewal process. Beyond 3 years, you may need to apply for a fresh passport.' },
      { question: 'What is the validity period of a new passport?', answer: 'Adult passports are valid for 10 years from issue date. Minor passports are valid for 5 years and can be re-issued once as an adult passport.' },
      { question: 'How long does passport renewal take?', answer: 'Passport renewal typically takes 30 days for normal processing and 3-7 days for tatkal (urgent) processing with additional fees.' },
      { question: 'Do I need to appear in person for renewal?', answer: 'For renewal, you may not need to appear if all documents are correct. However, it depends on the police verification result.' },
      { question: 'Can I travel abroad while renewal is pending?', answer: 'No, you cannot travel internationally with an expired passport. The new passport must be issued before travel.' }
    ],
    sources: [
      { name: 'Passport India Official', url: 'https://passportindia.gov.in' },
      { name: 'Regional Passport Offices', url: 'https://passportindia.gov.in/AppOnlinePassport/form/AboutRPO' }
    ]
  },

  {
    slug: 'passport-reissue-documents-required-students',
    title: 'Passport Reissue for Students | Required Documents',
    description: 'Student passport reissue documents, name correction for students, change of address. Complete checklist for student passport updates.',
    h1: 'Passport Reissue for Students: Documents & Proof Requirements',
    category: 'travel',
    keywords: 'student passport reissue, passport documents for students, student name change passport',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Students often need to reissue or correct passport details due to name changes after marriage or other life events. This guide lists all required documents for student passport reissue.',
    requiredDocuments: [
      { type: 'Proof of Identity', description: 'One of:', options: ['School/College ID Card', 'Aadhaar', 'PAN Card', 'Voter ID'] },
      { type: 'Proof of Address', description: 'One of:', options: ['School/College Address Proof', 'Parent Aadhaar', 'Hostel Allotment Letter', 'Utility Bill'] },
      { type: 'Proof of Name Change', description: 'If applicable:', options: ['Marriage Certificate', 'Deed Poll', 'Court Order', 'Gazette Notification'] },
      { type: 'Original Passport', description: 'Current/previous passport copy', options: ['Photocopy of original passport pages'] },
      { type: 'Birth Certificate', description: 'For minor students', options: ['Certified copy of birth certificate'] }
    ],
    fileSpecs: { docs: { format: 'PDF/Image', size: 'Max 2MB' } },
    faqItems: [
      { question: 'Can students get passport reissued after name change?', answer: 'Yes, after marriage or legal name change, students can apply for reissue. You need a marriage certificate or court order as proof.' },
      { question: 'Is parent permission required for student passport reissue?', answer: 'For students under 18, parent/guardian permission and signature are required on the application form.' },
      { question: 'Can I use school ID as proof of address?', answer: 'Yes, school/college ID along with an official address certificate from the institution is accepted as proof of address.' },
      { question: 'How much does passport reissue cost for students?', answer: 'The fee is Rs. 2000 for regular processing. Tatkal (urgent) processing costs Rs. 4500 with additional charges.' },
      { question: 'Do minor students need parental consent letter?', answer: 'Yes, minors need a notarized parental consent letter. Both parents must sign if jointly applying.' }
    ],
    sources: [
      { name: 'Passport India Portal', url: 'https://passportindia.gov.in' },
      { name: 'Tatkal Passport Info', url: 'https://passportindia.gov.in/AppOnlinePassport/form/TatkalPassport' }
    ]
  },

  {
    slug: 'passport-photo-size-requirements-india',
    title: 'Passport Photo Size Requirements India | Specifications',
    description: 'Exact passport photo dimensions, resolution, and specifications for Indian passport applications. Avoid rejections with correct measurements.',
    h1: 'Passport Photo Size Requirements in India: Complete Specifications',
    category: 'travel',
    keywords: 'passport photo size india, passport photo dimensions, passport photo specifications',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Incorrect passport photo dimensions are a leading cause of application rejection. This guide provides exact specifications for Indian passport photos.',
    requiredDocuments: [],
    fileSpecs: {
      photos: {
        size: '3.5 cm × 4.5 cm (35mm × 45mm)',
        resolution: 'Minimum 350 DPI',
        format: 'JPEG or PNG',
        fileSize: 'Max 300KB per photo',
        background: 'Plain white or off-white background',
        face: 'Face must occupy 70-80% of frame',
        expression: 'Neutral expression, both eyes open',
        headCovering: 'No headwear except for religious reasons'
      }
    },
    faqItems: [
      { question: 'What is the exact passport photo size in cm?', answer: 'Exactly 3.5 cm × 4.5 cm (width × height). Photos larger or smaller will be rejected.' },
      { question: 'Can I use digital photos from my phone?', answer: 'Yes, if the resolution is at least 350 DPI and dimensions are exactly 3.5×4.5 cm. Avoid zoom or cropping.' },
      { question: 'Is colored background acceptable?', answer: 'No, only plain white or off-white backgrounds are acceptable. Colored backgrounds will lead to rejection.' },
      { question: 'Can I wear glasses in passport photo?', answer: 'Yes, you can wear glasses, but there should be no glare or reflections on the lenses. Both eyes must be clearly visible.' },
      { question: 'What DPI is required for passport photos?', answer: 'Minimum 350 DPI (dots per inch) is required. Lower resolution will be rejected during document verification.' }
    ],
    sources: [
      { name: 'Passport Seva - Photo Requirements', url: 'https://passportindia.gov.in' },
      { name: 'Ministry of External Affairs', url: 'https://mea.gov.in' }
    ]
  },

  // PAN Card Guides
  {
    slug: 'pan-card-name-correction-documents-required',
    title: 'PAN Card Name Correction | Required Documents',
    description: 'Documents needed for PAN card name correction. Learn proof requirements and step-by-step guide for changing name on PAN card.',
    h1: 'PAN Card Name Correction: Required Documents & Proof List',
    category: 'banking',
    keywords: 'pan card name correction, pan card name change documents, pan correction form',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'PAN card name correction is common after marriage or due to spelling errors. This guide covers all required documents and the correction process.',
    requiredDocuments: [
      { type: 'Proof of Identity', description: 'Any one:', options: ['Passport', 'Aadhaar', 'Voter ID', 'Driving License'] },
      { type: 'Proof of Name Change', description: 'For marriage/legal change:', options: ['Marriage Certificate', 'Deed Poll', 'Court Order', 'Gazette Notification'] },
      { type: 'Proof of Address', description: 'Any one:', options: ['Passport', 'Aadhaar', 'Utility Bill', 'Rental Agreement'] },
      { type: 'PAN Card Copy', description: 'Current PAN card', options: ['Photocopy of existing PAN card'] }
    ],
    fileSpecs: { docs: { format: 'PDF/JPEG', size: 'Max 100KB each' } },
    faqItems: [
      { question: 'How long does PAN name correction take?', answer: 'PAN correction typically takes 10-15 days after application. Expedited processing may take 5-7 days with additional charges.' },
      { question: 'What is Form 49AA for PAN?', answer: 'Form 49AA is used for correcting/changing name, address, or other details on your existing PAN card.' },
      { question: 'Can I correct spelling mistakes without marriage certificate?', answer: 'Yes, for spelling mistakes, you only need your original document (passport, birth certificate) showing the correct spelling.' },
      { question: 'Is PAN suspension possible during name correction?', answer: 'No, your PAN remains active during correction. You can continue using it for transactions.' },
      { question: 'How much does PAN name correction cost?', answer: 'PAN correction is free. You only need to submit the application online via NSDL or UTIITSL portal.' }
    ],
    sources: [
      { name: 'NSDL PAN Portal', url: 'https://nsdl.co.in' },
      { name: 'Income Tax India', url: 'https://incometax.gov.in' }
    ]
  },

  {
    slug: 'pan-card-dob-correction-documents-required',
    title: 'PAN Card DOB Correction | Required Documents',
    description: 'Date of birth correction on PAN card. Documents needed and step-by-step process for correcting DOB in PAN application.',
    h1: 'PAN Card DOB Correction: Documents & Proof Requirements',
    category: 'banking',
    keywords: 'pan dob correction, pan date of birth correction, correcting dob in pan card',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Incorrect date of birth on PAN can cause issues with tax filings. This guide explains all required documents for PAN DOB correction.',
    requiredDocuments: [
      { type: 'Proof of Birth', description: 'One of:', options: ['Birth Certificate', 'SSLC Marksheet', 'School Transfer Certificate', 'Passport'] },
      { type: 'Proof of Identity', description: 'One of:', options: ['Passport', 'Aadhaar', 'Voter ID', 'Driving License'] },
      { type: 'Proof of Address', description: 'One of:', options: ['Passport', 'Aadhaar', 'Utility Bill', 'Bank Statement'] },
      { type: 'PAN Card Copy', description: 'Current PAN card copy', options: ['Photocopy of PAN card'] }
    ],
    fileSpecs: { docs: { format: 'PDF/JPEG', size: 'Max 100KB each' } },
    faqItems: [
      { question: 'How do I correct my date of birth on PAN?', answer: 'Use Form 49AA to apply for DOB correction. Submit through NSDL/UTIITSL with birth certificate as proof.' },
      { question: 'What documents prove date of birth?', answer: 'Birth certificate, SSLC/10th marksheet, school transfer certificate, passport, or Aadhaar can serve as proof of birth.' },
      { question: 'Can wrong DOB on PAN affect ITR filing?', answer: 'Yes, if your DOB on PAN doesn\'t match ITR, it can cause issues. Correct it immediately after discovering the error.' },
      { question: 'How long does DOB correction take?', answer: 'Typically 10-15 days for standard processing. Expedited processing takes 5-7 days with nominal charges.' },
      { question: 'Will DOB correction affect my PAN number?', answer: 'No, your PAN number remains the same. Only the details in the database are updated.' }
    ],
    sources: [
      { name: 'NSDL PAN Correction', url: 'https://nsdl.co.in' },
      { name: 'UTIITSL Services', url: 'https://www.utiitsl.com' }
    ]
  },

  // Aadhaar Guides
  {
    slug: 'aadhaar-address-change-documents-required',
    title: 'Aadhaar Address Change | Documents Required',
    description: 'Complete list of documents needed to change address on Aadhaar card. Learn proof requirements and online/offline update process.',
    h1: 'Aadhaar Address Change: Required Documents & Proof',
    category: 'identity',
    keywords: 'aadhaar address change documents, aadhaar address update proof, aadhaar new address',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Changing your address on Aadhaar is essential for updated identification. This guide lists all required documents for address update.',
    requiredDocuments: [
      { type: 'Proof of Address', description: 'Any one:', options: ['Utility Bill (electricity, water, gas)', 'Telephone Bill', 'Bank Statement', 'Rental Agreement', 'Property Tax Receipt'] },
      { type: 'Proof of Identity', description: 'Optional (if provided)', options: ['Passport', 'Voter ID', 'Driving License', 'Pan Card'] }
    ],
    fileSpecs: { docs: { format: 'Original or attested copy', size: 'Not older than 3 months' } },
    faqItems: [
      { question: 'Can I update Aadhaar address online?', answer: 'Yes, you can update address online through myAadhaar portal using OTP verification. However, for certain updates, in-person verification may be required.' },
      { question: 'What is the fastest way to change Aadhaar address?', answer: 'Online update through myAadhaar is fastest, taking 7-15 days. Offline updates at Aadhaar centers may take 15-30 days.' },
      { question: 'Do I need to visit an Aadhaar center for address change?', answer: 'For online address change via myAadhaar, no visit is needed. For offline updates, you must visit a nearby Aadhaar enrollment center.' },
      { question: 'Which bills are accepted for Aadhaar address proof?', answer: 'Electricity, water, gas, telephone, and internet bills are accepted. Bills should not be older than 3 months.' },
      { question: 'How much does Aadhaar address update cost?', answer: 'Aadhaar address update is completely free both online and offline.' }
    ],
    sources: [
      { name: 'UIDAI Official', url: 'https://uidai.gov.in' },
      { name: 'myAadhaar Portal', url: 'https://myaadhaar.uidai.gov.in' }
    ]
  },

  {
    slug: 'aadhaar-photo-size-requirements-update',
    title: 'Aadhaar Photo Size Requirements | Update Specifications',
    description: 'Aadhaar photo size, dimensions, resolution specifications for online updates and enrollment. Exact requirements to avoid rejection.',
    h1: 'Aadhaar Photo Size Requirements: Complete Specifications',
    category: 'identity',
    keywords: 'aadhaar photo size, aadhaar photo specifications, aadhaar photo resolution',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Correct photo specifications are essential for Aadhaar approval. This guide provides exact dimensions and technical requirements.',
    requiredDocuments: [],
    fileSpecs: {
      photos: {
        size: '200 pixels × 240 pixels (4:5 aspect ratio)',
        fileSize: 'Between 10KB and 1MB',
        format: 'JPEG (.jpg)',
        resolution: 'Minimum 72 DPI',
        background: 'Plain white or light background',
        quality: 'Clear, color photograph',
        requirements: 'Face must be frontal, eyes open, natural expression'
      }
    },
    faqItems: [
      { question: 'What is the exact Aadhaar photo size in pixels?', answer: 'Exactly 200 pixels wide × 240 pixels tall (4:5 aspect ratio) for online updates.' },
      { question: 'Can I upload a colored background photo?', answer: 'No, Aadhaar requires a plain white or very light background. Colored or busy backgrounds will be rejected.' },
      { question: 'What is the file size limit for Aadhaar photo?', answer: 'File size must be between 10KB and 1MB. Photos smaller or larger will not upload.' },
      { question: 'Can I wear headwear in Aadhaar photo?', answer: 'No headwear is allowed except for genuine religious or medical reasons, subject to UIDAI approval.' },
      { question: 'What format should Aadhaar photo be in?', answer: 'Only JPEG (.jpg) format is accepted. PNG or other formats will not be accepted by myAadhaar portal.' }
    ],
    sources: [
      { name: 'UIDAI Photo Requirements', url: 'https://uidai.gov.in/en/my-aadhaar/get-aadhaar/enrolment-process.html' },
      { name: 'myAadhaar Help', url: 'https://myaadhaar.uidai.gov.in' }
    ]
  },

  {
    slug: 'how-to-download-aadhaar-pdf-online',
    title: 'Download Aadhaar PDF Online | Complete Guide',
    description: 'Step-by-step guide to download Aadhaar eID (electronic Aadhaar) PDF online. Learn masking options and password protection.',
    h1: 'How to Download Aadhaar PDF Online: Complete Guide',
    category: 'identity',
    keywords: 'download aadhaar pdf, aadhaar e-id download, aadhaar digital copy, masked aadhaar',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Downloading your Aadhaar PDF is simple and secure. This guide explains the process, masking options, and how to use your digital Aadhaar.',
    requiredDocuments: [
      { type: 'Aadhaar Number or Enrollment ID', description: '12-digit Aadhaar or 14-digit enrollment ID', options: ['Aadhaar Number'] },
      { type: 'OTP Verification', description: 'Registered mobile or email', options: ['Mobile OTP or Email OTP'] }
    ],
    fileSpecs: { pdf: { format: 'Encrypted PDF', size: '200-500KB', security: 'Password protected' } },
    faqItems: [
      { question: 'Is downloading Aadhaar PDF free?', answer: 'Yes, downloading eAadhaar (electronic Aadhaar) from myAadhaar portal is completely free and can be done unlimited times.' },
      { question: 'What is masking in Aadhaar PDF?', answer: 'Masking hides your Aadhaar number, keeping only the last 4 digits visible. This protects your full number while using Aadhaar as identity proof.' },
      { question: 'Can I download Aadhaar without an OTP?', answer: 'No, OTP verification is mandatory for security. You can receive OTP on registered mobile or email ID.' },
      { question: 'Is the downloaded Aadhaar PDF password protected?', answer: 'Yes, the eAadhaar PDF is encrypted with a password. You set the password during download.' },
      { question: 'Can I use downloaded Aadhaar for KYC and verification?', answer: 'Yes, official eAadhaar PDF is valid for all KYC, identification, and verification purposes.' }
    ],
    sources: [
      { name: 'myAadhaar Portal', url: 'https://myaadhaar.uidai.gov.in' },
      { name: 'UIDAI Official', url: 'https://uidai.gov.in' }
    ]
  },

  // Driving License Guides
  {
    slug: 'driving-license-renewal-documents-required',
    title: 'Driving License Renewal | Required Documents',
    description: 'Documents needed for driving license renewal in India. Complete checklist for DL renewal across states.',
    h1: 'Driving License Renewal: Required Documents & Checklist',
    category: 'transport',
    keywords: 'driving license renewal documents, dl renewal proof, driving license renewal checklist',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Driving license renewal is essential before expiry. This guide covers all required documents for smooth DL renewal.',
    requiredDocuments: [
      { type: 'Proof of Age', description: 'One of:', options: ['Birth Certificate', 'Passport', 'SSLC Marksheet', 'PAN Card'] },
      { type: 'Proof of Address', description: 'One of:', options: ['Aadhaar', 'Passport', 'Utility Bill', 'Voter ID', 'Rental Agreement'] },
      { type: 'Medical Certificate', description: 'Form 1A (if over 50) or if required', options: ['Authorized medical practitioner form'] },
      { type: 'Current Driving License', description: 'Original license', options: ['Existing DL copy'] },
      { type: 'Passport Photos', description: '2-3 color photos', options: ['Size 4.5cm × 3.5cm'] }
    ],
    fileSpecs: { docs: { format: 'Original or attested copy', size: 'Any' } },
    faqItems: [
      { question: 'How long before expiry can I renew driving license?', answer: 'You can renew your DL up to 30 days before expiry. Renewing early won\'t affect the renewal date; validity extends from the current expiry date.' },
      { question: 'Is medical certificate required for all DL renewals?', answer: 'Medical certificate (Form 1A) is required if you\'re over 50 years old. Younger drivers don\'t need it unless specified by RTO.' },
      { question: 'How long does driving license renewal take?', answer: 'Usually 30 days. Some RTOs offer same-day or next-day renewal at premium charges.' },
      { question: 'Can I drive with an expired DL while renewal is pending?', answer: 'No, driving with an expired license is illegal and can result in fines. Apply before expiry to avoid this.' },
      { question: 'Is DL renewal done online or offline?', answer: 'Most states allow online renewal for eligible applicants. Offline renewal is done at RTO offices.' }
    ],
    sources: [
      { name: 'Ministry of Road Transport', url: 'https://morth.gov.in' },
      { name: 'Vahan Portal', url: 'https://vahan.nic.in' }
    ]
  },

  {
    slug: 'driving-license-renewal-documents-uttar-pradesh',
    title: 'DL Renewal Documents - Uttar Pradesh | UP Guide',
    description: 'Driving license renewal requirements specific to Uttar Pradesh. UP RTO documents, fees, and process.',
    h1: 'Driving License Renewal in Uttar Pradesh: Required Documents',
    category: 'transport',
    keywords: 'up driving license renewal, uttar pradesh dl renewal documents, up rto driving license',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Uttar Pradesh has specific DL renewal requirements. This guide covers UP-specific documents and RTO procedures.',
    requiredDocuments: [
      { type: 'Proof of Address', description: 'One of:', options: ['Aadhaar', 'Electricity Bill', 'Water Bill', 'Telephone Bill', 'Ration Card'] },
      { type: 'Proof of Age', description: 'One of:', options: ['Birth Certificate', 'Passport', 'Voter ID'] },
      { type: 'Current DL', description: 'Original', options: ['Existing driving license'] },
      { type: 'Medical Certificate', description: 'If age 50+', options: ['Form 1A from medical practitioner'] },
      { type: 'Recent Photo', description: '2 color photos', options: ['Size 4.5cm × 3.5cm'] }
    ],
    fileSpecs: { docs: { format: 'Original with photocopy', size: 'Any' } },
    faqItems: [
      { question: 'Which RTOs in UP handle DL renewal?', answer: 'All district RTOs in UP handle DL renewal. You must visit your jurisdiction RTO or apply online through Parivahan portal.' },
      { question: 'How much is DL renewal fee in UP?', answer: 'DL renewal fee in UP is Rs. 200 for international license and Rs. 50 for domestic renewal. Processing charges vary by RTO.' },
      { question: 'Can I renew DL online in Uttar Pradesh?', answer: 'Yes, through Parivahan portal (parivahan.gov.in) for eligible applicants who don\'t need medical or vision tests.' },
      { question: 'Is eye test required for DL renewal in UP?', answer: 'Yes, vision test is mandatory. If your eyesight is corrected with glasses, current specs are required.' },
      { question: 'What is the processing time for UP DL renewal?', answer: 'Usually 10-30 days depending on RTO workload. Some RTOs offer same-day renewal for additional charges.' }
    ],
    sources: [
      { name: 'Parivahan Portal', url: 'https://parivahan.gov.in' },
      { name: 'UP RTO Info', url: 'https://updto.gov.in' }
    ]
  },

  {
    slug: 'driving-license-renewal-documents-maharashtra',
    title: 'DL Renewal Documents - Maharashtra | MH Guide',
    description: 'Driving license renewal requirements for Maharashtra. MH RTO documents, procedures, and online process.',
    h1: 'Driving License Renewal in Maharashtra: Required Documents',
    category: 'transport',
    keywords: 'maharashtra driving license renewal, mh dl renewal documents, maharashtra rto driving license',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Maharashtra has streamlined DL renewal through eNamiRam system. This guide covers MH-specific requirements and process.',
    requiredDocuments: [
      { type: 'Proof of Address', description: 'One of:', options: ['Aadhaar', 'Property Tax Receipt', 'Utility Bill', 'Insurance Policy', 'Bank Passbook'] },
      { type: 'Proof of Age', description: 'One of:', options: ['Birth Certificate', 'Passport', 'High School Certificate', 'PAN Card'] },
      { type: 'Current DL', description: 'Original', options: ['Existing driving license'] },
      { type: 'Medical Certificate', description: 'If age 50+ or required', options: ['Form 1A from authorized doctor'] },
      { type: 'Recent Photographs', description: '2 color passport photos', options: ['Size 4.5cm × 3.5cm'] }
    ],
    fileSpecs: { docs: { format: 'Original documents', size: 'Latest 6 months proof' } },
    faqItems: [
      { question: 'Can I renew DL online in Maharashtra?', answer: 'Yes, Maharashtra allows online renewal through eNamiRam portal for eligible applicants. You don\'t need to visit RTO office if pre-approved.' },
      { question: 'What is DL renewal fee in Maharashtra?', answer: 'DL renewal fee is Rs. 200 for standard renewal. International permit renewal costs additional charges.' },
      { question: 'How do I apply for online DL renewal in MH?', answer: 'Visit transport.maharashtra.gov.in, select DL Renewal, enter your details, upload documents, pay fee online, and receive approval.' },
      { question: 'Is vision test mandatory for MH DL renewal?', answer: 'Yes, vision test is part of renewal. You can take it online through home appointment or visit RTO office.' },
      { question: 'How long for MH DL renewal approval?', answer: 'Online approval typically takes 5-15 days. Offline renewal at RTO takes 10-30 days.' }
    ],
    sources: [
      { name: 'Maharashtra Transport', url: 'https://transport.maharashtra.gov.in' },
      { name: 'eNamiRam Portal', url: 'https://sarthi.parivahan.gov.in' }
    ]
  },

  {
    slug: 'driving-license-renewal-documents-delhi',
    title: 'DL Renewal Documents - Delhi | Delhi RTO Guide',
    description: 'Driving license renewal documents for Delhi. Delhi RTO process, fees, online and offline renewal options.',
    h1: 'Driving License Renewal in Delhi: Required Documents',
    category: 'transport',
    keywords: 'delhi driving license renewal, delhi dl renewal documents, delhi rto license renewal',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Delhi allows online DL renewal for eligible applicants. This guide covers Delhi RTO specific requirements and procedures.',
    requiredDocuments: [
      { type: 'Proof of Address', description: 'One of:', options: ['Aadhaar', 'Delhi Voter ID', 'Delhi Utility Bill', 'Rent Agreement', 'Property Tax Receipt'] },
      { type: 'Proof of Age', description: 'One of:', options: ['Birth Certificate', 'Passport', '10th Certificate', 'Aadhar'] },
      { type: 'Current DL', description: 'Original', options: ['Valid/Expired driving license'] },
      { type: 'Medical Certificate', description: 'If age 50+', options: ['Form 1A from govt. doctor'] },
      { type: 'Recent Photo', description: '2 color photos', options: ['Passport size 4.5cm × 3.5cm'] }
    ],
    fileSpecs: { docs: { format: 'Original documents with copy', size: 'Any' } },
    faqItems: [
      { question: 'Can Delhi DL renewal be done online?', answer: 'Yes, Delhi allows online DL renewal through Parivahan portal for many applicants. Check eligibility first.' },
      { question: 'What is DL renewal fee in Delhi?', answer: 'DL renewal fee is Rs. 200 for domestic license. International permit fee is additional.' },
      { question: 'How to apply for DL renewal in Delhi online?', answer: 'Visit parivahan.gov.in, select Delhi, choose DL Renewal, fill form, upload documents, pay fee, schedule appointment if needed.' },
      { question: 'Is physical appointment required for Delhi DL renewal?', answer: 'For most applicants with correct documents, no appointment needed. Some may need eye test at RTO.' },
      { question: 'How many days for Delhi DL renewal?', answer: 'Online approval typically 5-10 days. Offline at RTO: 15-30 days depending on workload.' }
    ],
    sources: [
      { name: 'Delhi Parivahan Portal', url: 'https://parivahan.gov.in' },
      { name: 'Delhi RTO', url: 'https://delhipolice.gov.in' }
    ]
  },

  // Voter ID Guides
  {
    slug: 'voter-id-address-change-documents-required',
    title: 'Voter ID Address Change | Required Documents',
    description: 'Documents needed for changing address on voter ID card. Complete guide for voter ID update.',
    h1: 'Voter ID Address Change: Required Documents & Proof',
    category: 'identity',
    keywords: 'voter id address change documents, voter id address update proof, voter id new address',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Address changes on voter ID are necessary after relocation. This guide covers all required documents and procedures.',
    requiredDocuments: [
      { type: 'Proof of New Address', description: 'One of:', options: ['Utility Bill', 'Ration Card', 'Bank Statement', 'Rental Agreement', 'Property Tax Receipt'] },
      { type: 'Proof of Identity', description: 'One of:', options: ['Passport', 'Aadhaar', 'Driving License', 'PAN Card'] },
      { type: 'Current Voter ID', description: 'Original or copy', options: ['Existing voter ID'] }
    ],
    fileSpecs: { docs: { format: 'Original or self-attested copy', size: 'Not older than 3 months' } },
    faqItems: [
      { question: 'How do I change my address on voter ID?', answer: 'You can apply through Form 8A online via Electoral Commission website or offline at your electoral office with required documents.' },
      { question: 'What proof is accepted for voter ID address change?', answer: 'Utility bills, ration cards, bank statements, rental agreements, property tax receipts (not older than 3 months) are accepted.' },
      { question: 'How long does voter ID address change take?', answer: 'Usually 30-45 days after application. Electoral Commission may require verification in some cases.' },
      { question: 'Can I vote during voter ID address change?', answer: 'You can vote with old address during processing. Once new address is registered, you must vote from new constituency.' },
      { question: 'Is there any fee for voter ID address change?', answer: 'No, changing address on voter ID is completely free.' }
    ],
    sources: [
      { name: 'Electoral Commission of India', url: 'https://eci.gov.in' },
      { name: 'Online Voter Registration', url: 'https://www.nvsp.in' }
    ]
  },

  // Additional Guides (continuing)
  {
    slug: 'pan-card-link-with-aadhaar-complete-guide',
    title: 'Link PAN with Aadhaar | Complete Step-by-Step Guide',
    description: 'How to link PAN card with Aadhaar card online. Documents required and process to link PAN to Aadhaar.',
    h1: 'Link PAN Card with Aadhaar: Complete Guide & Steps',
    category: 'banking',
    keywords: 'link pan with aadhaar, pan aadhaar linking, how to link pan and aadhaar',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Linking PAN with Aadhaar is mandatory per CBDT guidelines. This guide explains the process and required information.',
    requiredDocuments: [
      { type: 'PAN Card', description: '10-digit PAN', options: ['PAN number'] },
      { type: 'Aadhaar Card', description: '12-digit Aadhaar', options: ['Aadhaar number'] }
    ],
    fileSpecs: { docs: { format: 'Digital numbers only', size: 'N/A' } },
    faqItems: [
      { question: 'Is linking PAN with Aadhaar mandatory?', answer: 'Yes, per CBDT guidelines, linking is mandatory. Non-linking can result in PAN being marked as inoperative.' },
      { question: 'How to link PAN with Aadhaar online?', answer: 'Visit incometax.gov.in, log in, go to Link Aadhaar, enter both numbers, verify, and submit. Can also use NSDL/UTIITSL portals.' },
      { question: 'What if my name differs on PAN and Aadhaar?', answer: 'Names must match exactly. Correct the spelling on the document with mismatch before linking.' },
      { question: 'How long does PAN-Aadhaar linking take?', answer: 'Online linking is immediate. Sometimes system verification takes 24-48 hours.' },
      { question: 'Can linking be done offline?', answer: 'Yes, you can submit a signed letter with PAN and Aadhaar numbers to the Income Tax office.' }
    ],
    sources: [
      { name: 'Income Tax India', url: 'https://incometax.gov.in' },
      { name: 'NSDL PAN Services', url: 'https://nsdl.co.in' }
    ]
  },

  {
    slug: 'affidavit-required-passport-minor-children',
    title: 'Affidavit for Minor\'s Passport | Required Documents',
    description: 'Affidavit requirements and documents for minor child passport application. Parents consent letter and documents needed.',
    h1: 'Affidavit for Minor\'s Passport: Required Documents & Format',
    category: 'travel',
    keywords: 'passport affidavit minor, minor passport documents, minor passport consent, minor passport affidavit',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Minor passport applications require parental affidavits and specific documents. This guide covers all requirements for minors.',
    requiredDocuments: [
      { type: 'Birth Certificate', description: 'Proof of age', options: ['Certified copy of birth certificate'] },
      { type: 'Parental Consent Affidavit', description: 'Notarized', options: ['Both parents affidavit'] },
      { type: 'Proof of Parent Identity', description: 'One of:', options: ['Passport', 'Aadhaar', 'Voter ID', 'Driving License'] },
      { type: 'Proof of Address', description: 'One of:', options: ['Utility Bill', 'Aadhaar', 'Telephone Bill', 'Rental Agreement'] },
      { type: 'Guardian ID', description: 'If applicable', options: ['Court order or guardianship document'] },
      { type: 'Minor\'s Photo', description: '4-6 color photographs', options: ['Size 3.5cm × 4.5cm'] }
    ],
    fileSpecs: { docs: { format: 'Original/attested copy', size: 'N/A' } },
    faqItems: [
      { question: 'Why is affidavit required for minor passport?', answer: 'Affidavits confirm parental consent and guardianship. They\'re legal documents required by Passport Seva for minor applications.' },
      { question: 'Can single parent apply for minor\'s passport?', answer: 'Yes, but requires affidavit from both parents or custody/guardianship court order if applicable.' },
      { question: 'What should be in parental consent affidavit?', answer: 'Affidavit should state parental consent for passport, child\'s details, parent\'s details, and declaration under oath.' },
      { question: 'Where to get affidavit notarized for minor passport?', answer: 'Any notary public or lawyer can notarize the affidavit. Ensure proper stamp paper (Rs. 100-500) is used.' },
      { question: 'How long is minor passport valid?', answer: 'Minor passports are valid for 5 years (for children below 15). Can be reissued as adult passport after turning 18.' }
    ],
    sources: [
      { name: 'Passport India - Minor Application', url: 'https://passportindia.gov.in/AppOnlinePassport/form/MinorPassport' },
      { name: 'Ministry of External Affairs', url: 'https://mea.gov.in' }
    ]
  },

  // Additional high-intent guides
  {
    slug: 'aadhaar-biometric-update-documents-required',
    title: 'Aadhaar Biometric Update | Required Documents',
    description: 'Documents needed for Aadhaar biometric update (fingerprints, iris, face). Enrollment center visits and requirements.',
    h1: 'Aadhaar Biometric Update: Documents & Enrollment Requirements',
    category: 'identity',
    keywords: 'aadhaar biometric update, aadhaar fingerprint update, aadhaar iris update',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Biometric updates for Aadhaar require in-person enrollment. This guide covers all requirements and procedures.',
    requiredDocuments: [
      { type: 'Aadhaar Number or Enrollment ID', description: 'Identification', options: ['12-digit Aadhaar or 14-digit enrollment ID'] },
      { type: 'Proof of Identity', description: 'For verification', options: ['Passport', 'Voter ID', 'Driving License', 'PAN Card'] }
    ],
    fileSpecs: { biometric: { fingerprints: 'All 10 fingers scanned', iris: 'Both eyes scanned', face: 'High-quality photo' } },
    faqItems: [
      { question: 'When do I need to update Aadhaar biometrics?', answer: 'Update biometrics if they don\'t match during verification, if quality is poor, or if your biometric data is compromised.' },
      { question: 'Where to update Aadhaar biometrics?', answer: 'Visit any authorized UIDAI Aadhaar enrollment center. Find nearest center on UIDAI website.' },
      { question: 'Do I need appointment for biometric update?', answer: 'Walk-in enrollment is available, but you can book appointment online to avoid waiting.' },
      { question: 'How long does Aadhaar biometric update take?', answer: 'Updates are processed in 7-15 days. Critical updates may be processed faster.' },
      { question: 'Is there any fee for Aadhaar biometric update?', answer: 'Biometric updates are free for all Aadhaar holders.' }
    ],
    sources: [
      { name: 'UIDAI Enrollment Centers', url: 'https://uidai.gov.in/en/my-aadhaar/find-enrolment-centre.html' },
      { name: 'UIDAI Official', url: 'https://uidai.gov.in' }
    ]
  },

  {
    slug: 'birth-certificate-correction-documents-required',
    title: 'Birth Certificate Correction | Required Documents',
    description: 'Documents needed for birth certificate correction. Name, date of birth, father name corrections and legal requirements.',
    h1: 'Birth Certificate Correction: Required Documents & Process',
    category: 'certificates',
    keywords: 'birth certificate correction, birth certificate correction documents, correcting birth certificate',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Correcting birth certificate errors is essential for other document applications. This guide explains all required documents.',
    requiredDocuments: [
      { type: 'Original Birth Certificate', description: 'Original or registered copy', options: ['Birth certificate issued by local authority'] },
      { type: 'Proof of Correct Information', description: 'Documents showing correct details', options: ['Aadhaar', 'Passport', 'School Certificate', 'Marriage Certificate'] },
      { type: 'Affidavit', description: 'For corrections', options: ['Notarized affidavit from parents/guardians'] },
      { type: 'ID Proof', description: 'Parents or applicant', options: ['Aadhaar', 'Voter ID', 'Passport', 'Driving License'] },
      { type: 'Address Proof', description: 'Current residence proof', options: ['Utility Bill', 'Ration Card', 'Aadhar'] }
    ],
    fileSpecs: { docs: { format: 'Original with attested copies', size: 'N/A' } },
    faqItems: [
      { question: 'How much time does birth certificate correction take?', answer: 'Simple corrections take 5-10 days. Court order corrections may take 30-60 days depending on case.' },
      { question: 'What corrections can be made on birth certificate?', answer: 'Name, date of birth, parent names, spelling corrections, gender, and other details can be corrected through proper procedure.' },
      { question: 'Do I need court order for birth certificate correction?', answer: 'Minor corrections can be done at municipal office. Major changes need court order (District Court or Civil Court).' },
      { question: 'How much does birth certificate correction cost?', answer: 'Municipal corrections are usually free or minimal fee (Rs. 50-200). Court cases involve legal fees.' },
      { question: 'Can adults correct their own birth certificate?', answer: 'Yes, adults can apply for correction. For minors, parents/guardians must apply.' }
    ],
    sources: [
      { name: 'Vital Statistics India', url: 'https://www.indiastat.com/birth-certificate' },
      { name: 'Ministry of Home Affairs', url: 'https://mha.gov.in' }
    ]
  },

  {
    slug: 'income-certificate-documents-required',
    title: 'Income Certificate | Required Documents & Process',
    description: 'Documents needed for income certificate application. Eligibility proof and verification documents for income certificate.',
    h1: 'Income Certificate: Required Documents & Application Process',
    category: 'certificates',
    keywords: 'income certificate documents, income certificate requirements, income certificate proof',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    intro: 'Income certificates are required for scholarships and subsidies. This guide covers all required documents for application.',
    requiredDocuments: [
      { type: 'Proof of Identity', description: 'One of:', options: ['Aadhaar', 'Voter ID', 'Passport', 'Driving License'] },
      { type: 'Proof of Address', description: 'One of:', options: ['Utility Bill', 'Ration Card', 'Lease Agreement', 'Aadhaar'] },
      { type: 'Proof of Income', description: 'For self-employed:', options: ['ITR (last 3 years)', 'Business License', 'Bank Statements', 'Tax Receipts'] },
      { type: 'Proof of Employment', description: 'For salaried:', options: ['Salary Certificate', 'Employment Letter', 'Latest Payslip'] },
      { type: 'Photo', description: '2-3 passport sized photos', options: ['Size 4.5cm × 3.5cm'] }
    ],
    fileSpecs: { docs: { format: 'Original/attested copy', size: 'N/A' } },
    faqItems: [
      { question: 'How long does income certificate verification take?', answer: 'Usually 5-15 days depending on the district. Income verification may take longer if income level requires survey.' },
      { question: 'What is the income limit for income certificate?', answer: 'There\'s no set limit. Income certificate is issued based on actual declared income regardless of amount.' },
      { question: 'Can income certificate be obtained online?', answer: 'In many states, income certificate can be applied online through district administration portals. Final issued copy is offline.' },
      { question: 'How long is income certificate valid?', answer: 'Usually valid for 1-2 years from issue date. You may need a fresh one after expiry for certain purposes.' },
      { question: 'Where to apply for income certificate?', answer: 'Apply at Revenue department office or Tehsil/Taluk office in your jurisdiction.' }
    ],
    sources: [
      { name: 'Department of Revenue', url: 'https://dor.gov.in' },
      { name: 'e-District Services', url: 'https://edistrict.nic.in' }
    ]
  }
];

export default guidePages;
