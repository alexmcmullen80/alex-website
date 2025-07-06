const projects = [
    {
        name: 'McMaster/Co-operators Insurance Problem-Solving Competition: Runner-Up',
        description: 'Led the development of a Poisson regression claim count model used to identify top 5% risks. \nAnalyzed past insurance claim data to identify trends affecting claim frequency. \nPresented findings as a team of 5 to a panel of judges, finishing 2nd out of 30 teams',
        images: {
            0: 'Python',
            1: 'R',
            2: 'Excel'

        },
        link: 'https://app.hex.tech/01970e0f-8afe-7112-b095-d6b0a5d5e818/app/0197ae31-8e6b-7001-8208-1c34cd47fa72/latest'
    },
    {
        name: 'Digital Gold or Fool\'s Gold? Bitcoin as an Inflation Hedge',
        description: 'Evaluated Bitcoin\'s role as an inflation hedge by analyzing historical performance and return correlations between Bitcoin, Gold, S&P 500 and inflation (CPI) from 2015-2025. \nAssessed predictive relationships between assets and inflation through Granger causality testing. \nCompared performance of optimal portfolios under uncertainty using the Sharpe Ratio and 100 Monte Carlo Simulations over 252 days. \nConcluded Bitcoin does not hedge inflation but improves diversification and risk-adjusted returns.',
        images: {
            0: 'Python'
        },
        link: 'https://app.hex.tech/01970e0f-8afe-7112-b095-d6b0a5d5e818/app/01970e44-e38d-7113-884a-2d30c7384e28/latest'
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
        name: 'OneTwoThreeXOR!',
        description: 'Invented novel Private Key cryptosystem using the XOR operation. \nCreated encryption and decryption functions used to transfer messages between two users. Performed analysis on security and efficiency of the system using the Known Plaintext Attack (KPA) and Chosen Plaintext Attack (CPA).',
        link: 'https://alexs-public-pdf-bucket.s3.us-east-1.amazonaws.com/OneTwoThreeXOR!.pdf'
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