// Google Analytics helper functions for XPath Diner

function trackLevelComplete(levelNumber, selector) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'level_complete', {
            'level': levelNumber,
            'xpath_selector': selector,
            'event_category': 'learning_progress'
        });
    }
}

function trackLevelAttempt(levelNumber, userSelector, isCorrect) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'level_attempt', {
            'level': levelNumber,
            'user_xpath': userSelector,
            'correct': isCorrect,
            'event_category': 'learning_interaction'
        });
    }
}

function trackHelpUsed(levelNumber, helpType) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'help_used', {
            'level': levelNumber,
            'help_type': helpType,
            'event_category': 'learning_assistance'
        });
    }
}
