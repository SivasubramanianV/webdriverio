import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil-community/router'

@Component({
    tag: 'app-profile',
    shadow: true,
})
export class AppProfile {
    @Prop() match: MatchResults

    normalize(name: string): string {
        if (name) {
            return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
        }
        return ''
    }

    render() {
        return (
            <div class="app-profile">
                <p>Hello! My name is {this.normalize(this.match?.params.name)}.</p>
            </div>
        )
    }
}
