"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

const CreateProject = () => {
  const [project, setProject] = useState({
    projectTitle: '',
    startDate: '',
    endDate: '',
    sections: [],
  });

  const [sectionData, setSectionData] = useState({
    sectionTitle: '',
    sectionImage: null,
    sectionDesc: '',
  });

  const handleChange = (e) => {
    setProject((prevProject) => ({
      ...prevProject,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSectionImageChange = (e) => {
    const file = e.target.files[0];
    setSectionData((prevSectionData) => ({
      ...prevSectionData,
      sectionImage: file,
    }));
  };

  const handleAddSection = () => {
    const newSection = {
      sectionTitle: '',
      sectionImage: null,
      sectionDesc: '',
    };

    setProject((prevProject) => ({
      ...prevProject,
      sections: [...prevProject.sections, newSection],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your API request to send project and sections to the server
  };

  return (
    <div className="adminContent flex flex-col gap-6">
      <div className="flex justify between items-center">
        <h2 className="px-2">Create Project</h2>
        <div onClick={handleSubmit}>
          <Button type="add" label="Create Project" />
        </div>
      </div>
      <div className="flex flex-col gap-10 overflow-y-scroll overflow-x-auto px-2 pr-4">
        <div className="flex flex-col gap-2 h-max">
          <h4 className="text-primary">Project Title</h4>
          <input
            type="text"
            placeholder="Enter Project Title"
            className="formInput"
            name="projectTitle"
            value={project.projectTitle}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 h-max">
          <h4 className="text-primary">Project Deadline</h4>
          <div className="flex gap-8 w-full">
            <label className="flex w-full whitespace-nowrap items-center gap-4 text-black150">
              Start Date:{' '}
              <input
                type="date"
                placeholder="Start Date"
                className="text-base bg-white100 text-black150 rounded-sm focus:outline-none p-2 px-4 w-max"
                name="startDate"
                value={project.startDate}
                onChange={handleChange}
              />
            </label>
            <label className="flex w-full whitespace-nowrap items-center gap-4 text-black150">
              End Date:{' '}
              <input
                type="date"
                placeholder="End Date"
                className="text-base bg-white100 text-black150 rounded-sm focus:outline-none p-2 px-4 w-max"
                name="endDate"
                value={project.endDate}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="bg-primary py-1 w-full"></div>
        <h4 className="text-primary text-center">Project Sections</h4>
        {project.sections.map((section, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 h-max">
              <input
                type="text"
                placeholder="Section title (Optional)"
                className="formInput"
                name="sectionTitle"
                value={section.sectionTitle}
                onChange={(e) => handleSectionInputChange(e, index)}
              />
            </div>
            <div className="flex flex-col gap-2 h-max">
              <h4 className="text-primary">Upload Section Image</h4>
              <input
                type="file"
                accept="image/*"
                name="sectionImage"
                onChange={(e) => handleSectionImageChange(e, index)}
                placeholder="Upload Project Image"
              />
            </div>
            <div className="flex flex-col gap-2 h-max w-full">
              <h4 className="text-primary">Section Description</h4>
              <textarea
                name="sectionDesc"
                onChange={(e) => handleSectionInputChange(e, index)}
                className="h-[200px] rounded-sm w-full p-3 focus:outline-none"
                placeholder="Add Description of Project"
                value={section.sectionDesc}
              />
            </div>
            <hr className="w-full border-primary border-dashed" />
          </div>
        ))}
        <div className="text-center mx-5">
          <Button type="add" label="Add Section" onClick={handleAddSection} />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
