import {useQuery} from '@realm/react';
import {ProfileModel} from '../models/ProfileModel';

export const Read = () => {
  // Find
  const profiles = useQuery(ProfileModel);
  // Sort
  const sortedProfiles = useQuery(ProfileModel, profiles => {
    return profiles.sorted('name', false);
  });
  // Filter
  const filteredProfiles = useQuery(ProfileModel, profiles => {
    return profiles.filtered('name == "testProfile"');
  });

  // ... rest of component
};