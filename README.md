# Greek Verb Quiz with Adaptive Spaced Repetition

A web-based application for learning Greek verbs using an adaptive spaced repetition system that schedules reviews based on your learning progress.

## Version
Current Version: 1.1.0

## Features

- **Adaptive Spaced Repetition System**: Reviews are scheduled based on your self-assessed difficulty with each verb
- **Customizable Learning Intervals**: Set your own time intervals for each difficulty level (Hard, Medium, Easy, Learned)
- **Progress Tracking**: Visual representation of mastery level for each verb
- **Multiple View Options**: Browse verbs by conjugation group, alphabetically, or by difficulty status
- **Search Functionality**: Quickly find specific verbs by Greek form, meaning, or conjugation type
- **Collapsible UI**: Efficiently navigate large verb lists with expandable sections
- **Session Statistics**: Track your performance in each study session

## How It Works

The application uses a research-backed spaced repetition system that schedules reviews just before you would naturally forget, optimizing the learning process:

1. **Learn with feedback-driven intervals**: After answering each question, you rate how well you knew the answer using four difficulty levels:
   - **Hard** - You struggled with this verb (review again soon)
   - **Medium** - You knew it but had to think (review again in a moderate timeframe)
   - **Easy** - You knew it quickly (review again in a longer timeframe)
   - **Learned** - You've mastered it (review again after an extended period)

2. **Prioritized learning**: The system presents verbs that are due for review first, focusing on those you find most difficult.

3. **Mastery tracking**: Your progress with each verb is tracked, showing your increasing mastery over time.

## Technical Information

- **Pure client-side application**: Built with HTML, CSS, and JavaScript
- **No dependencies**: No external libraries or frameworks required
- **Single file**: Everything is contained in one HTML file for easy deployment
- **Responsive design**: Works on desktop and mobile devices

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/greek-verb-quiz.git
   ```

2. Open `index.html` in your web browser.

3. Select the verbs you want to practice and click "Start Quiz".

## Current Limitations

- **Prototype status**: This is currently a prototype with an in-memory storage system.
- **No persistence**: Your progress is lost when you close or refresh the page.
- **Limited verb database**: Currently includes 10 common Greek verbs.

## Planned Enhancements

- [ ] Add local storage support to save progress between sessions
- [ ] Expand the verb database to 500+ Greek verbs
- [ ] Add audio pronunciation for each verb
- [ ] Implement conjugation practice (different verb forms)
- [ ] Add user accounts for cloud-based progress tracking

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to suggest improvements.

## License

[MIT License](LICENSE)

## Acknowledgments

- This project was inspired by research on spaced repetition learning techniques
- Special thanks to contributors who have helped improve this learning tool
