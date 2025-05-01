// js/models/InitializeProgressData.js
// Make the function globally available
window.initializeProgressData = function() {
    // Create initial progress data for each verb
    return verbs.map(verb => {
        // Generate random mastery level for demonstration
        const randomMastery = Math.floor(Math.random() * 100);

        // Determine status based on mastery level
        let status;
        if (randomMastery < 30) {
            status = 'hard';
        } else if (randomMastery < 60) {
            status = 'medium';
        } else if (randomMastery < 80) {
            status = 'easy';
        } else {
            status = 'learned';
        }

        // Calculate next review date based on status
        const nextReview = calculateNextReview(status);

        return {
            verbId: verb.id,
            correctCount: Math.floor(Math.random() * 10),
            incorrectCount: Math.floor(Math.random() * 5),
            lastAttempted: new Date(Date.now() - Math.random() * 86400000).toISOString(),
            masteryLevel: randomMastery,
            status: status,
            nextReview: nextReview
        };
    });
};