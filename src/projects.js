const projects = [
    {
        name: 'McMaster/Co-operators Insurance Problem-Solving Competition: Runner-Up',
        description: 'Led the development of a Poisson regression claim count model used to identify top 5% risks. \nAnalyzed past insurance claim data to identify trends affecting claim frequency. \nPresented findings as a team of 5 to a panel of judges, finishing 2nd out of 30 teams',
        images: {
            0: 'Python',
            1: 'R',
            2: 'Excel'

        },
        link: 'https://alexs-public-pdf-bucket.s3.us-east-1.amazonaws.com/Co-operators+Presentation.pdf'
    },
    {
        name: 'ML Model Comparison for Sentiment Analysis',
        description: 'Compared the performance of Logistic Regression, Support Vector Machines and Naive Bayes classifiers for a sentiment analysis task. \nAchieved up to 94% accuracy using advanced preprocessing methods and optimized feature selection.',
        images: {
            0: 'Python',

        },
        link: 'https://github.com/alexmcmullen80/Sentiment-Analysis-Model'
    },
    {
        name: 'Image Recognition with Google Vision AI',
        description: 'Developed a React-based image search application utilizing the Google Cloud Vision API to label images with descriptive tags. \nImplemented tag-based search functionality, filtering images stored in an Amazon S3 bucket. \nDeployed the application on AWS Amplify.',
        images: {
            0: 'Amplify',
            1: 'JavaScript',
            2: 'React',
            3: 'Node',
            4: 'Vision',
            5: 'Python',

        },
        link: 'https://image-recognition.alexmcmullen.ca/'
    },
    {
        name: 'TSX Stock Model',
        description: 'Used Yahoo Finance and Finnhub REST APIs to extract 365 days of historical financial data for 9 major stocks in the Toronto Stock Exchange. \nFit historical data to a model with polynomial regression, graphed the resulting data and model with R.',
        images: {
            0: 'Amplify',
            1: 'JavaScript',
            2: 'React',
            3: 'Node',
            4: 'PostgreSQL',
            5: 'Python',
            6: 'R',

        },
        link: 'https://tsx-stock-model.alexmcmullen.ca/'
    },
    {
        name: 'Personal Website',
        description: 'Created a personal website to showcase my professional portfolio, share my personal interests, and provide an easy way to connect with me.',
        images: {
            0: 'Amplify',
            1: 'JavaScript',
            2: 'React',
            3: 'Node',


        },
        link: 'https://github.com/alexmcmullen80/alex-website'
    },
]
export default projects;