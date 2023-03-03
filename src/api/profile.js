import { useState } from 'react';
import {
  validationTransformerWithCustomTranslations,
  validationTransformer,
} from '@shared/errorTransformers';
import api from '@api/user';
import { useMutation, useQuery } from 'react-query';

export function useProfile() {
  const [errors, setErrors] = useState({});

  const { isLoading, data, refetch } = useQuery(
    'profile',
    () => api.getProfile(),
    {
      enabled: false,
    }
  );

  const updateProfileMutation = useMutation(
    async payload => {
      await api.updateProfile(payload);
    },
    {
      onSuccess: () => {
        refetch();
      },
      onMutate: () => {
        setErrors({});
      },
      onError: (error, variables, previousValue) => {
        if (error.status === 404) {
          setErrors(
            validationTransformerWithCustomTranslations(
              error.data.data
            )
          );
        }
        if (error.status === 422) {
          setErrors(validationTransformer(error.data.data));
        }
      },
    }
  );

  return {
    profile: data?.data?.data,
    getProfile: refetch,
    updateProfile: updateProfileMutation.mutate,
    loading: isLoading || updateProfileMutation.isLoading,
    errors,
  };
}
