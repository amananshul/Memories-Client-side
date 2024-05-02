import { HeadlessService, FetchResult, ISession } from '@novu/headless';

import React, { useCallback, useEffect, useRef, useState } from 'react'

export const Nou = () => {
    const [notifications,setNotifications]=useState([])
    const headlessServiceRef=useRef()
    useEffect(() => {

        const headlessService = new HeadlessService({
            applicationIdentifier: 'hs2r04wGfG3g',
            subscriberId: '66323277868b8f1418e12f53',
        });

        headlessService.initializeSession({
            listener: (res) => {
            },
            onSuccess: (session) => {
                console.log('session',session)
                headlessServiceRef.current = headlessService;
                if (headlessService) {
                    headlessService.fetchNotifications({
                        listener: ({ data, error, isError, isFetching, isLoading, status }) => {
                            // Handle the state of the fetching process and errors here.
                        
                        },
                        onSuccess: (response) => {
                          console.log('response',response)
                            // Handle the fetched notifications here.
                            setNotifications(response.data); // Store notifications in the state
                        },
                    });
                }
            },
            onError: (error) => {
                console.log("headlessSice error:", error);
            },
        })

    }, [])
console.log('notifications',notifications)
  return (
    <div>

        <h1>Nouv</h1>
        {notifications.length && 'You got a notifications '}
    </div>
  )
}

