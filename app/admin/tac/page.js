"use client";

import { Button } from '@/components'
import React, {useState} from 'react'

const tac = () => {

    const [editableText, setEditableText] = useState(`These Terms and Conditions ("Agreement") are entered into by and between [Your Company Name], hereinafter referred to as the "Company," and [Programmer's Name], hereinafter referred to as the "Programmer," collectively referred to as the "Parties."

    1. Project Overview: 1.1. The Programmer agrees to provide programming services to the Company for the [Project Name] project. 1.2. The Company agrees to compensate the Programmer for their services as outlined in Section 3 of this Agreement.

    2. Project Scope: 2.1. The Programmer's responsibilities shall include, but are not limited to, [list the specific tasks and responsibilities]. 2.2. The Programmer agrees to complete all tasks within the agreed-upon deadlines.

    3. Compensation: 3.1. The Company shall compensate the Programmer at the rate of [Specify hourly, monthly, or project-based rate] for the services rendered. 3.2. Payment terms and schedule: [Specify payment terms, such as monthly, upon project completion, or other agreed-upon terms]. 3.3. All compensation shall be subject to applicable taxes and deductions.

    4. Intellectual Property: 4.1. All intellectual property rights, including but not limited to code, software, and related materials developed during the project, shall be owned exclusively by the Company. 4.2. The Programmer shall not retain any rights to use, distribute, or sublicense the project's intellectual property.

    5. Confidentiality: 5.1. The Programmer agrees to maintain the confidentiality of all project-related information, including but not limited to proprietary code, data, and project details. 5.2. The Programmer shall not disclose any confidential information to third parties without the prior written consent of the Company.

    6. Termination: 6.1. Either Party may terminate this Agreement with written notice to the other Party. 6.2. Upon termination, the Programmer shall promptly deliver all project-related materials and intellectual property to the Company.

    7. Governing Law: 7.1. This Agreement shall be governed by and construed in accordance with the laws of [Specify your jurisdiction]. 7.2. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts in [Specify your jurisdiction].

    8. Entire Agreement: 8.1. This Agreement constitutes the entire understanding between the Parties and supersedes any prior agreements or understandings, whether written or oral.

    9. Amendment: 9.1. This Agreement may only be amended in writing and signed by both Parties.

    10. Execution: 10.1. This Agreement may be executed in counterparts, each of which shall be deemed an original but all of which together will constitute one and the same instrument.

    IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the date first above written.

    Company:
    [Your Company Name]
    By: ______________________ [Authorized Signatory] [Date]
    Programmer:
    [Programmer's Name]
    By: ______________________ [Programmer's Signature] [Date]`);

    const handleTextChange = (event) => {
        setEditableText(event.target.value);
    };

  return (
    <div className='adminContent flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
            <h2 className='px-2'>Terms and Conditions</h2>
            <Button type="primary" label="Send to all"/>
        </div>
        <textarea
            className="overflow-y-scroll overflow-x-auto border-none rounded-sm py-4 px-4 focus:outline-none"
            value={editableText}
            onChange={handleTextChange}
            rows={20}
            cols={80} 
        />
    </div>
  )
}

export default tac